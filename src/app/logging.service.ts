export class LoggingService{
  /* creamos un helper metodo, 
  queremos simplemente pasar el cambio de estatus de la cuenta*/

logStatusChange(status:string){
     console.log('A server status changed, new status: ' + status);
}

}