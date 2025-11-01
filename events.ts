namespace events {
   export enum BroadcastMessage {
       //% block="message1"
      Message1,
      //% block="message2"
      Message2
   }

    let _id: BroadcastMessage | string


     //% blockId="events_on_receive_broadcast" block="on receive $message"
    //% message.shadow="color_enum_shim"
   //% weight=99
    export function onReceive(message: BroadcastMessage | string, handler: () => void) {
        if (_id === message) handler()
        else return
    }
    
   //% blockId=events_broadcast
    //% block="broadcast $message" local changes
    //% message.shadow="color_enum_shim" weight=100
         //% message=text
    export function broadcast(message: BroadcastMessage | string) {
        _id = message
    }
}