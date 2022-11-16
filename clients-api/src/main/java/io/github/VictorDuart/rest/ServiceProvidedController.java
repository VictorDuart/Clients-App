package io.github.VictorDuart.rest;

import io.github.VictorDuart.model.entity.Client;
import io.github.VictorDuart.model.entity.ServiceProvided;
import io.github.VictorDuart.model.repository.ClientRepository;
import io.github.VictorDuart.model.repository.ServiceProvidedRepository;
import io.github.VictorDuart.rest.dto.ServiceProvidedDTO;
import io.github.VictorDuart.util.BigDecimalConverter;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import javax.validation.Valid;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;

@RestController
@RequestMapping("/api/service-provided")
@RequiredArgsConstructor //permite a abstração do construtor (constrói um construtor com os argumentos obrigatórios da classe)
public class ServiceProvidedController {

    private final ClientRepository clientRepository;
    private final ServiceProvidedRepository repository;
    private final BigDecimalConverter bigDecimalConverter;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public ServiceProvided save(@RequestBody @Valid ServiceProvidedDTO dto){
        LocalDate date = LocalDate.parse(dto.getDate(), DateTimeFormatter.ofPattern("dd/MM/yyyy"));
        Integer idClient = dto.getIdClient();

        Client client = clientRepository.findById(idClient).orElseThrow(() -> new ResponseStatusException(HttpStatus.BAD_REQUEST, "Cliente inexistente"));

        ServiceProvided serviceProvided = new ServiceProvided();
        serviceProvided.setDesc(dto.getDesc());
        serviceProvided.setDate(date);
        serviceProvided.setClient(client);
        serviceProvided.setValue(bigDecimalConverter.converter(dto.getValue()));

        return repository.save(serviceProvided);
    }

    @GetMapping
    public List<ServiceProvided> search(
            @RequestParam(value = "name", required = false, defaultValue = "") String name,
            @RequestParam(value = "month", required = false) Integer month
    ){
        return repository.findByClientNameAndServiceMouth("%" + name + "%", month);
    }
}
