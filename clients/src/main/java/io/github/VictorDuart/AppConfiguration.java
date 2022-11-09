package io.github.VictorDuart;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;

@Development
public class AppConfiguration {

    @Bean
    public CommandLineRunner execute(){
        return args -> {
            System.out.println("Rodando config dev");
        };
    }
}
