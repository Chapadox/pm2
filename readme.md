pm2 start arquivo.js  Inicia um novo processo
pm2 stop <nome> Para um processo em execução
pm2 restart <nome>  Reinicia um processo
pm2 delete <nome> Remove um processo
pm2 logs <nome> Exibe os logs de um processo
pm2 logs <nome> –lines 100  Exibe as últimas 100 linhas de logs de um processo
pm2 monit Exibe um Dashboard no Terminal com informações dos processos
–watch  Reinicia o processo quando um arquivo é alterado:
–name <nome>  Define um nome para o processo
–max-memory-restart <numero>  Define um limite de memória para o processo
-i <numero> Inicia no modo cluster com a quantidade de CPUs informada
-i max

pm2 list
pm2 ls
pm2 status  Lista todos os processo em Execução
pm2 stop all  Para todos os processos em execução
pm2 start all Inicia todos os processos
pm2 restart all Reinicia todos os processos
pm2 delete all  Remove todos os processos
pm2 flush Limpa todos os arquivos de logs
