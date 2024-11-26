# Agroinvest Viewer #
Após quase 2 anos utilizando o novo programa Agroinvest, com 121 processos concluidos, finalmente chegou a hora de entrar no estágio final!
Os requerimentos de serviços são iniciados na Secretaria da Agricultura, utilizando o programa Agroinvest, 
porém a execução do serviço fica por conta da Secretaria de Obras e Serviços Públicos. Para completar o processo 
quero adicionar após a autorização de execução, um documento que informa a conclusão do serviço emitido pela secretaria irá executá-lo.

Estágios do processo:

1- O produtor solicita o requerimento; (Agroinvest)  
2- A Secretaria da Agricultura encaminha por uma Comunicação Interna; (Agroinvest)  
3- O Setor de Tributação emite o despacho e Boleto para pagamento; (Setor de Tributação)  
4- Após o pagamento é gerada a autorização de serviço; (Agroinvest)  

<p> 5- Emissão de conclusão do serviço, para finalizar e poder arquivar o processo (Agroinvest Viewer) </p>

Utilizando Typescript + Nest será possível para a Secretaria de Obras emitir parecer sobre a conclusão do serviço, pelo computador ou até mesmo
pelo celular do Secretário da pasta, tornando o processo mais transparente e evitando quaisquer problemas de divergência sobre o estado de execução.

[V] Conexão com banco de dados;
[V] Criação de rotas iniciais;
[ ] Alterar estado de conclusão;
    -> criar rota;
    -> gravar estado, data e quem alterou.
[ ] Acesso de usuários;
[ ] Notificação de conclusão de processo no programa Agroinvest
[ ] Frontend: Exibicão de processos a serem executados (facilita a visualização para a Secretaria de Obras)


