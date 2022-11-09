package io.github.VictorDuart.service;

import io.github.VictorDuart.modal.Client;
import io.github.VictorDuart.repository.AppClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AppClientService {

    private AppClientRepository repository;

    @Autowired
    public AppClientService(AppClientRepository repository)
    {
        this.repository = repository;
    }

    public void saveClient(Client client){
        validateClient(client);
        this.repository.persist(client);
    }

    public void validateClient(Client client){
        //aplica validações
    }
}
