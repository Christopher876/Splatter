package net.christopherw.splatter.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DemoCotroller {
    @GetMapping("/hello")
    public String Hello(){
        return "Hello";
    }
}
