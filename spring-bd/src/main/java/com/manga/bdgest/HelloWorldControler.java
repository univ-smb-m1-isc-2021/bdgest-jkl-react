package com.manga.bdgest;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class HelloWorldControler {

    @RequestMapping("/")
    public ResponseEntity<JsonNode> get() throws JsonProcessingException {
        ObjectMapper mapper = new ObjectMapper();
        JsonNode json = mapper.readTree("{\"id\": \"132\", \"name\": \"Alice\"}");
        return ResponseEntity.ok(json);
    }

    @RequestMapping("/hh")
    public ResponseEntity<JsonNode> hello() throws JsonProcessingException
    {
        ObjectMapper mapper = new ObjectMapper();
        JsonNode json = mapper.readTree("{\"hello\": \"world\"}");
        return ResponseEntity.ok(json);
    }
}
