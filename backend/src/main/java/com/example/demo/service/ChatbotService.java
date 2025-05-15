package com.example.demo.service;

import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class ChatbotService {

    @Value("${groq.api.key}")
    private String apiKey;

    private final RestTemplate restTemplate = new RestTemplate();
    private final ObjectMapper objectMapper = new ObjectMapper();

    public String getChatbotResponse(String userMessage) {
        try {
            String url = "https://api.groq.com/openai/v1/chat/completions";
            HttpHeaders headers = new HttpHeaders();
            headers.set("Authorization", "Bearer " + apiKey);
            headers.set("Content-Type", "application/json");

            String requestBody = String.format(
                "{\"model\": \"llama-3.3-70b-versatile\", \"messages\": [{\"role\": \"system\", \"content\": \"Provide a concise, to-the-point response.\"}, {\"role\": \"user\", \"content\": \"%s\"}], \"max_tokens\": 250}",
                userMessage.replace("\"", "\\\"")
            );

            HttpEntity<String> entity = new HttpEntity<>(requestBody, headers);
            ResponseEntity<String> response = restTemplate.exchange(url, HttpMethod.POST, entity, String.class);

            return extractMessageFromResponse(response.getBody());
        } catch (Exception e) {
            e.printStackTrace();
            return "Error: Could not get response from AI.";
        }
    }

    private String extractMessageFromResponse(String responseBody) {
        try {
            JsonNode rootNode = objectMapper.readTree(responseBody);
            JsonNode choices = rootNode.path("choices");
            if (choices.isArray() && choices.size() > 0) {
                JsonNode message = choices.get(0).path("message").path("content");
                if (message.isTextual()) {
                    return message.asText();
                }
            }
            return "Error: No valid response from AI.";
        } catch (Exception e) {
            e.printStackTrace();
            return "Error: Failed to parse AI response.";
        }
    }
}