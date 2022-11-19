package io.github.VictorDuart.rest.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

@Data
@NoArgsConstructor
public class ServiceProvidedDTO {

    @NotEmpty(message = "{campo.desc.obrigatorio}")
    private String desc;

    @NotEmpty(message = "{campo.value.obrigatorio}")
    private String value;

    @NotEmpty(message = "{campo.date.obrigatorio}")
    private String date;

    @NotNull(message = "{campo.client.obrigatorio}")
    private Integer idClient;
}
