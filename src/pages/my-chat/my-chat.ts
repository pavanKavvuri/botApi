import { Component, ViewChild } from '@angular/core'; 
import { NavController, NavParams, Content } from 'ionic-angular';
import { Keyboard } from '@ionic-native/keyboard';
import { ChatterBotProvider } from '../../providers/chatter-bot/chatter-bot';
import { SpeechSerProvider } from '../../providers/speech-ser/speech-ser';


interface Message {  
  text: string;
  user: boolean;
};

@Component({
  selector: 'page-my-chat',
  templateUrl: 'my-chat.html',
})


export class MyChatPage { 

  buttonIcon: string = "ios-mic-outline";
  speechData: string;
  myVal: string;
  timeoutSet: boolean = false;
  //txt:string = 'Hi there. How may I assist you?';
  txt:string = 'Hi there!';
   

  
  @ViewChild(Content) content: Content;

  inputMessage: string = '';
  messages: Array<Message> = []; 
  alternate: boolean = false;

  user = {
    first: '',
    last: ''
  };

    constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private keyboard: Keyboard,
    private LogSer : ChatterBotProvider,
    private speechRecognitionService: SpeechSerProvider) {  

                                        this.user = { first: this.navParams.get('first'), last: this.navParams.get('last') };
                                        this.messages = [
                                          {
                                            text: this.txt,
                                            user: true
                                          }
                                        ]
                                        this.speechData = "";
this.getSpeech(this.txt);
                                          //setTimeout(alert("HelloBoss") , 10000);
                                          //setTimeout(alert("HelloBoss11222") , 3000);
                                      }

    ionViewDidLoad() {
    }

 onSend(qst) {
   // alert(a);
              console.log(qst.trim());
                      if (qst.trim().length !== 0) {
                                      
                                        this.messages.push({
                                        text: qst,
                                        user: this.alternate
                              });

                  this.LogSer.serData(qst).subscribe(  
                        res=>{ 
                              // setTimeout(this.getSpeech(res), 3000);
                              this.getSpeech(res);
                              this.myVal = res;
                                        this.messages.push({
                                        text: res,            //for removing "" in a string.
                                        user: !this.alternate
                              });
                              });
                                        this.inputMessage = '';
                                        //this.alternate = !this.alternate;
                                        this.scrollToBottom();
                      }

                                    this.inputMessage = '';
                                    this.keyboard.close();

   //return this.myVal;
  }

  scrollToBottom() {
    let dimension = this.content.getContentDimensions();
    this.content.scrollTo(0, dimension.scrollHeight);
  }



activateRec(){
//console.log("timeoutSet satrting");

            this.speechRecognitionService.record()
            .subscribe(
                                                       //listener
            (value) => { 
                    //var p = value.json();
                   // this.inputMessage =  value["Intermediate"]; 
                    
                    if(!value["Final"]){
                      this.inputMessage =  value["Intermediate"];
                    }else{
                       console.log("This is the value:" + value["Final"]);
                       this.inputMessage =  value["Final"];
                       this.onSend(this.inputMessage);
                      //  var pqr = this.onSend(this.inputMessage);
                        //this.getSpeech(pqr);
                      // this.StopRec();
                      }
                    //this.onSend(value)


                    
/*console.log("Inside value");
                    this.inputMessage =  value["Intermediate"];
                          // setTimeout(
                            // this.inputMessage =  value["Intermediate"] , 10000);
                          //   this.onSend(this.inputMessage) , 3000);


                             setTimeout(alert("HelloBoss") , 3000);
                          

                            //;
*/
            },
                                                      //errror
            (err) => {
                    console.log(err.error);
                   
                    
                    if (err.error == "no-speech") {
                        console.log("No-speech error. Click the button again!");
                                            }

                    else if (err.error == "network") {
                        console.log("Network Connectivity problem. Try again");
                        
                        //console.log("button Icon is:" + this.buttonIcon);
                                            }

                    else if (err.error == "aborted") {
                        console.log("Aborted");
                        //this.toggleIcon("str");
                        //console.log("button Icon is:" + this.buttonIcon);
                                            }
                   // console.log("button Icon is:" + this.buttonIcon);
                   // this.myIcon('ios-mic-outline');
                   // console.log("button Icon is:" + this.buttonIcon);
                                          },
                                                      //completion
            () => {
                    console.log("--complete--");
                   // this.activateRec();
                   this.toggleIcon();
            });
      
   // , 10000);

    
  }


  StopRec(){
              this.speechRecognitionService.endNow();
           }



getSpeech(syn){

        var u = new SpeechSynthesisUtterance();
        u.text = syn;
        //u.lang = 'de-de';
        u.lang = 'en-IN';
        u.rate = 1.1;
        u.pitch = 1;
        speechSynthesis.speak(u);
 }

toggleIcon() {

      if (this.buttonIcon === 'ios-mic-outline') {

            this.buttonIcon = "ios-mic-off-outline";
        //console.log("mic is on");
            this.activateRec();
      }
      else if (this.buttonIcon === 'ios-mic-off-outline') {
        this.buttonIcon = "ios-mic-outline";
        //console.log("mic is off");
        this.StopRec();
      }
      
   }

   myIcon(getIcon:string){
    // if (getIcon === 'ios-mic-outline') {
        this.buttonIcon = getIcon;
      //}
     
   }


/*8888*/



  }
