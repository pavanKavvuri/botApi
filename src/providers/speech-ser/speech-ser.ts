import { Injectable, NgZone } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import * as _ from "lodash";



interface IWindow extends Window { 
    webkitSpeechRecognition: any;
    SpeechRecognition: any;
} 

@Injectable()
export class SpeechSerProvider {

  

  speechRecognition: any;

    constructor(private zone: NgZone) {
    }


record(): Observable<string> {

if(window['webkitSpeechRecognition']){
    console.log("Supported for this browser");

        return Observable.create(observer => {
            const { webkitSpeechRecognition }: IWindow = <IWindow>window;
            this.speechRecognition = new webkitSpeechRecognition();
            //this.speechRecognition = SpeechRecognition;
            this.speechRecognition.continuous = false;  // false for faster recognition
            this.speechRecognition.interimResults = true;
            this.speechRecognition.lang = 'en-in';
            this.speechRecognition.maxAlternatives = 1;

        
               
               this.speechRecognition.onresult = speech => {
                console.log("Result called now");
                let term: string = "";
                let final: string = "";
                let interm: string = "";
                if (speech.results) {
                    var result = speech.results[speech.resultIndex];
                    //console.log("RESULT IS:  " + result);
                    var transcript = result[0].transcript;
                    console.log("TRANSCRIPT IS:  "+transcript)
                    //console.log("Confidence is: "+result[0].confidence);
                    if (result.isFinal) {
                        if (result[0].confidence < 0.3) {
                            console.log("Unrecognized result - Please try again");
                        }
                        else {
                            //term = term + _.trim(transcript);
                            term =  _.trim(transcript);
                            final = term;
                            console.log("Final result is:" + term );
                             
                        }
                    }else{
                        //console.log("final:" + final );
                        //var d = {"Hello": "buddy"}
                        term =  _.trim(transcript);
                        interm = term;
                    }
                }
                this.zone.run(() => {
                    if(final.length){
                        //observer.next(final);
                        
                        let d = {"Final": final}
                        //let jsonObj: any = d.json()
                        //interm = JSON.stringify(d)  //JSON.stringify(d);
                        console.log("Final is:" + interm);
                        observer.next(d); 
                        
                    }
                    else{
                        //console.log("final in zone:" + final );
                       // observer.next(interm);

                        let i = {"Intermediate": interm}
                        //interm = JSON.stringify(i);
                        observer.next(i);
                    }

                  // observer.next(term);
                    
                });
               }
            



            this.speechRecognition.onerror = error => {
                observer.error(error);
                console.log("Error occured : " + error)
            };

            this.speechRecognition.onend = () => {
                observer.complete();
                console.log("Speech recognition ended. " )
            };

            this.speechRecognition.start();
            console.log("Start saying someting now!");
      
    

  });


       } //
       else{
           console.log("No support for this browser version");
           return null;
       }
    }


endNow(){
        this.speechRecognition.abort();  //it will stop listening here.
        console.log("stopped now");
    }

pauseNow(){
        this.speechRecognition.pause();  //it will pause listening here.
        console.log("paused now");
    }
resumeNow(){
        this.speechRecognition.resume();  //it will pause listening here.
        console.log("resumed now");
    }

}
































































/*

import { Injectable, NgZone } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import * as _ from "lodash";



interface IWindow extends Window { 
    webkitSpeechRecognition: any;
    SpeechRecognition: any;
} 

@Injectable()
export class SpeechSerProvider {

  timeoutSet: boolean = false;

  speechRecognition: any;

    constructor(private zone: NgZone) {
    }


record(): Observable<string> {

if(window['webkitSpeechRecognition']){
    console.log("Supported for this browser");

        return Observable.create(observer => {
            const { webkitSpeechRecognition }: IWindow = <IWindow>window;
            this.speechRecognition = new webkitSpeechRecognition();
            //this.speechRecognition = SpeechRecognition;
            this.speechRecognition.continuous = true;  // false for faster recognition
            this.speechRecognition.interimResults = true;
            this.speechRecognition.lang = 'en-in';
            this.speechRecognition.maxAlternatives = 1;

            this.speechRecognition.onresult = speech => {
                //console.log("Result called now");
                let term: string = "";
                let final: string = "";
                let interm: string = "";
                if (speech.results) {
                    var result = speech.results[speech.resultIndex];
                    //console.log("RESULT IS:  " + result);
                    var transcript = result[0].transcript;
                    console.log("TRANSCRIPT IS:  "+transcript)
                    //console.log("Confidence is: "+result[0].confidence);
                    if (result.isFinal) {
                        if (result[0].confidence < 0.3) {
                            console.log("Unrecognized result - Please try again");
                        }
                        else {
                            //term = term + _.trim(transcript);
                            term =  _.trim(transcript);
                            final = term;
                            console.log("Final result is:" + term );
                             
                        }
                    }else{
                        //console.log("final:" + final );
                        //var d = {"Hello": "buddy"}
                        term =  _.trim(transcript);
                        interm = term;
                    }
                }
                this.zone.run(() => {
                    if(final.length){
                        //observer.next(final);
                        
                        let d = {"Final": final}
                        //let jsonObj: any = d.json()
                        //interm = JSON.stringify(d)  //JSON.stringify(d);
                        console.log("Final is:" + interm);
                        observer.next(d); 
                        
                    }
                    else{
                        //console.log("final in zone:" + final );
                       // observer.next(interm);

                        let i = {"Intermediate": interm}
                        //interm = JSON.stringify(i);
                        observer.next(i);
                        //console.log("Interm is :"+interm);
                    }

                  // observer.next(term);
                    
                });
            }; 



            this.speechRecognition.onerror = error => {
                observer.error(error);
                console.log("Error occured : " + error)
            };

            this.speechRecognition.onend = () => {
                observer.complete();
                console.log("Speech recognition ended. " )
            };

            this.speechRecognition.start();
            console.log("Start saying someting now!");
        });


       } //
       else{
           console.log("No support for this browser version");
           return null;
       }
    }


endNow(){
        this.speechRecognition.abort();  //it will stop listening here.
        console.log("stopped now");
    }

pauseNow(){
        this.speechRecognition.pause();  //it will pause listening here.
        console.log("paused now");
    }
resumeNow(){
        this.speechRecognition.resume();  //it will pause listening here.
        console.log("resumed now");
    }

}


*/