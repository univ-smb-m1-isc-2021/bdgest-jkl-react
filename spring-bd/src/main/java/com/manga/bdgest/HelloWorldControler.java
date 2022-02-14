package com.manga.bdgest;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloWorldControler {

    @RequestMapping
    public String helloWorld()
    {
        return "Hello World from Spring Boot";
    }

    @RequestMapping("/hoody")
    public String hoody()
    {
        return "Hoody yeah";
    }
}
