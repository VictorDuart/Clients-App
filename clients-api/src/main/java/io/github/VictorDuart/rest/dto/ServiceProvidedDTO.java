package io.github.VictorDuart.rest.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class ServiceProvidedDTO {
    private String desc;
    private String value;
    private String date;
    private Integer idClient;
}
