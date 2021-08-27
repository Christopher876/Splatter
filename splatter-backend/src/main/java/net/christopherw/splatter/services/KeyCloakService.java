// https://gist.github.com/thomasdarimont/c4e739c5a319cf78a4cff3b87173a84b
package net.christopherw.splatter.services;

import net.christopherw.splatter.models.User;
import org.keycloak.OAuth2Constants;
import org.keycloak.admin.client.CreatedResponseUtil;
import org.keycloak.admin.client.Keycloak;
import org.keycloak.admin.client.KeycloakBuilder;
import org.keycloak.admin.client.resource.RealmResource;
import org.keycloak.admin.client.resource.UserResource;
import org.keycloak.admin.client.resource.UsersResource;
import org.keycloak.representations.idm.ClientRepresentation;
import org.keycloak.representations.idm.CredentialRepresentation;
import org.keycloak.representations.idm.RoleRepresentation;
import org.keycloak.representations.idm.UserRepresentation;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import javax.ws.rs.core.Response;
import java.util.List;

@Service
public class KeyCloakService implements IKeyCloakService {
    @Value("${keycloak.auth-server-url}") private String serverUrl;
    @Value("${keycloak.realm}") private String realm;
    @Value("${keycloak.resource}") private String clientId;
    @Value("${keycloak.credentials.secret}") private String clientSecret;

    @Override
    public boolean CreateNewUser(User user) {
        Keycloak keycloak = KeycloakBuilder.builder()
                .serverUrl(serverUrl)
                .realm(realm)
                .grantType(OAuth2Constants.PASSWORD)
                .clientId(clientId)
                .clientSecret(clientSecret)
                .username("admin")
                .password("12")
                .build();

        UserRepresentation newUser = new UserRepresentation();
        newUser.setEnabled(true);
        newUser.setUsername(user.getUsername());
        newUser.setFirstName(user.getFirstname());
        newUser.setLastName(user.getLastname());
        newUser.setEmail(user.getEmail());

        RealmResource realmResource = keycloak.realm(realm);
        UsersResource usersResource = realmResource.users();

        Response response = usersResource.create(newUser);
        String userId = CreatedResponseUtil.getCreatedId(response);

        CredentialRepresentation passwordCred = new CredentialRepresentation();
        passwordCred.setTemporary(false);
        passwordCred.setType(CredentialRepresentation.PASSWORD);
        passwordCred.setValue(user.getPassword());

        UserResource userResource = usersResource.get(userId);
        userResource.resetPassword(passwordCred);

        RoleRepresentation realmRole = realmResource.roles().get("app-user").toRepresentation();
        userResource.roles().realmLevel().add(List.of(realmRole));

        ClientRepresentation appClient = realmResource.clients().findByClientId("splatter-app").get(0);
        RoleRepresentation userClientRole = realmResource.clients().get(appClient.getId()).roles().get("user").toRepresentation();
        userResource.roles().clientLevel(appClient.getId()).add(List.of(userClientRole));
        System.out.println("Created account");
        return true;
    }

    @Override
    public boolean SetUserPassword() {
        return false;
    }

    @Override
    public boolean AssignRole() {
        return false;
    }

    @Override
    public boolean SetRealm() {
        return false;
    }
}
