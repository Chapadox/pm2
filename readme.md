pm2 start arquivo.js  Inicia um novo processo <br>
pm2 stop <nome> Para um processo em execução <br>
pm2 restart <nome>  Reinicia um processo <br>
pm2 delete <nome> Remove um processo<br>
pm2 logs <nome> Exibe os logs de um processo<br>
pm2 logs <nome> –lines 100  Exibe as últimas 100 linhas de logs de um processo<br>
pm2 monit Exibe um Dashboard no Terminal com informações dos processos<br>
–watch  Reinicia o processo quando um arquivo é alterado:<br>
–name <nome>  Define um nome para o processo<br>
–max-memory-restart <numero>  Define um limite de memória para o processo<br>
-i <numero> Inicia no modo cluster com a quantidade de CPUs informada<br>
-i max<br>

pm2 list<br>
pm2 ls<br>
pm2 status  Lista todos os processo em Execução<br>
pm2 stop all  Para todos os processos em execução<br>
pm2 start all Inicia todos os processos<br>
pm2 restart all Reinicia todos os processos<br>
pm2 delete all  Remove todos os processos<br>
pm2 flush Limpa todos os arquivos de logs<br>
