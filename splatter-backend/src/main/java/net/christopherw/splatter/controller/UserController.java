package net.christopherw.splatter.controller;

import net.christopherw.splatter.models.User;
import net.christopherw.splatter.services.KeyCloakService;
import org.jboss.resteasy.client.jaxrs.ResteasyClient;
import org.jboss.resteasy.client.jaxrs.ResteasyWebTarget;
import org.jboss.resteasy.client.jaxrs.internal.ResteasyClientBuilderImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.annotation.security.RolesAllowed;
import javax.ws.rs.client.Entity;
import javax.ws.rs.core.Form;
import javax.ws.rs.core.Response;
import org.springframework.web.bind.annotation.CrossOrigin;

@RestController
@RequestMapping("/api/user")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {
    @Autowired private KeyCloakService keyCloakService;
    final String keyCloakAuthUrl = "http://192.168.12.178:8180/auth/realms/SpringBootKeyCloak/protocol/openid-connect/token";

    // Send public key to the server for storage
    @RolesAllowed("user")
    @GetMapping("/send-public-key")
    public void UpdatePublicKey(){

    }

    //Ability to check whether user exists
    public void ExistUser() {

    }

    //Ability to make a user
    @PostMapping("/create")
    public ResponseEntity<String> CreateUser(@RequestBody User user){
        // Register this user in the keycloak server
        keyCloakService.CreateNewUser(user);
        user.password = "";
        return new ResponseEntity<>("Created User",HttpStatus.OK);
    }

    //Get the Auth Token
    @GetMapping("/login")
    public String GetAccessToken(@RequestParam String username, @RequestParam String password){
        // Create all of the post body values that we are going to use
        final Form form = new Form()
                .param("grant_type","password")
                .param("client_id","splatter-app")
                .param("client_secret","ac94b8ae-3f07-450d-8895-5e86c92eb6d8")
                .param("username",username)
                .param("password",password);

        // Create the rest client and send the request
        final ResteasyClient client = new ResteasyClientBuilderImpl().build();
        final ResteasyWebTarget target = client.target(keyCloakAuthUrl);
        Response response = target.request()
                .header("Content-Type","application/x-www-form-urlencoded")
                .post(Entity.form(form));
        String value = response.readEntity(String.class); // Turn the JSON we receive into a String to return
        response.close();
        return value;
    }

    /**
     * Returns a new access token when the refresh token is used
     * @param refresh_token Token that was sent out when client logged in for the access token
     * @return new access token for another 30 minutes and another refresh token
     */
    @GetMapping("/refresh")
    public String RefreshAccessToken(@RequestParam String refresh_token){
        // Create all the post body values that we are going to use
        final Form form = new Form()
                .param("grant_type","refresh_token")
                .param("client_id","login-app")
                .param("client_secret","ff4f347e-ec8b-4b75-8765-be5459dcda17")
                .param("refresh_token",refresh_token);

        // Create the rest client and send the request
        final ResteasyClient client = new ResteasyClientBuilderImpl().build();
        final ResteasyWebTarget target = client.target(keyCloakAuthUrl);
        Response response = target.request()
                .header("Content-Type","application/x-www-form-urlencoded")
                .post(Entity.form(form));
        String value = response.readEntity(String.class); // Turn the JSON we receive into a String to return
        response.close();
        return value;
    }

    //Ability to edit different fields about a user

    //Get other user's public key
    //This is stored within their account when they create an account and log in and it is generated for them

}
