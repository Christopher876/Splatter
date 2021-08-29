package net.christopherw.splatter.services;

import net.christopherw.splatter.models.User;
import org.springframework.web.bind.annotation.RequestBody;

public interface IKeyCloakService {
    boolean CreateNewUser(User user);
    boolean SetUserPassword();
    boolean AssignRole();
    boolean SetRealm();
}
