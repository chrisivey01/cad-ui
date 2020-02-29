import { JailService } from './../../services/jail.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jail',
  templateUrl: './jail.component.html',
  styleUrls: ['./jail.component.css']
})
export class JailComponent implements OnInit {
  totalCost = 0;
  totalTime = 0;
  citizensSSN: string;
  reasons = [];
  
  misdemeanors = [
    {
      "reason": "Failure to Identify",
      "cost": 525,
      "sentence": 15,
      "checked": false
    },
    {
      "reason": "Attempted GTA",
      "cost": 750,
      "sentence": 15,
      "checked": false
    },
    {
      "reason": "Fleeing/Eluding Law Enforcement",
      "cost": 700,
      "sentence": 15,
      "checked": false
    },
    {
      "reason": "Domestic Violence/Disturbance",
      "cost": 650,
      "sentence": 10,
      "checked": false
    },
    {
      "reason": "Disrespecting of an LEO",
      "cost": 1250,
      "sentence": 10,
      "checked": false
    },
    {
      "reason": "Verbal Threat towards a Civilian",
      "cost": 800,
      "sentence": 10,
      "checked": false
    },
    {
      "reason": "Verbal Threat towards an LEO",
      "cost": 1000,
      "sentence": 20,
      "checked": false
    },
    {
      "reason": "Providing False Information",
      "cost": 1500,
      "sentence": 10,
      "checked": false
    },
    {
      "reason": "Attempt of Corruption",
      "cost": 2500,
      "sentence": 15,
      "checked": false
    },
    {
      "reason": "Assault on a Civilian ",
      "cost": 1500,
      "sentence": 15,
      "checked": false
    },
    {
      "reason": "Failure to obey a lawful order",
      "cost": 1500,
      "sentence": 10,
      "checked": false
    },
    {
      "reason": "Trespassing",
      "cost": 1000,
      "sentence": 15,
      "checked": false
    }
  ]

  felonies1 = [
    {
      "reason": "DUI",
      "cost": 1500,
      "sentence": 30,
      "checked": false
    },
    {
      "reason": "Brandishing a weapon in city limits",
      "cost": 1500,
      "sentence": 30,
      "checked": false
    },
    {
      "reason": "Brandishing a lethal weapon in city limits",
      "cost": 2250,
      "sentence": 45,
      "checked": false
    },
    {
      "reason": "No firearms license",
      "cost": 5000,
      "sentence": 30,
      "checked": false
    },
    {
      "reason": "Possession of an illegal weapon",
      "cost": 1500,
      "sentence": 45,
      "checked": false
    },
    {
      "reason": "Possession of burglary tools",
      "cost": 10000,
      "sentence": 30,
      "checked": false
    },
    {
      "reason": "Grand theft auto",
      "cost": 2500,
      "sentence": 35,
      "checked": false
    },
    {
      "reason": "Intent to sell/distribute illegal substance",
      "cost": 500,
      "sentence": 30,
      "checked": false
    },
    {
      "reason": "Kidnapping of a civilian",
      "cost": 3000,
      "sentence": 35,
      "checked": false
    },
    {
      "reason": "Kidnapping of a gov. employee",
      "cost": 7500,
      "sentence": 45,
      "checked": false
    },
    {
      "reason": "Robbery/Mugging",
      "cost": 2000,
      "sentence": 30,
      "checked": false
    },
    {
      "reason": "Armed robbery of a store",
      "cost": 5000,
      "sentence": 40,
      "checked": false
    },
    {
      "reason": "Armed robbery of a jewelry/bank",
      "cost": 10000,
      "sentence": 50,
      "checked": false
    }
  ]
  felonies2 = [
    {
      "reason": "Assault of a gov employeee",
      "cost": 4000,
      "sentence": 35,
      "checked": false
    },
    {
      "reason": "Involuntary manslaughter",
      "cost": 2000,
      "sentence": 30,
      "checked": false
    },
    {
      "reason": "Fraud/Embezzlement",
      "cost": 50000,
      "sentence": 50,
      "checked": false
    },
    {
      "reason": "Drug trafficking",
      "cost": 5000,
      "sentence": 35,
      "checked": false
    },
    {
      "reason": "Human trafficking",
      "cost": 2000,
      "sentence": 30,
      "checked": false
    },
    {
      "reason": "Obstruction of Justice",
      "cost": 2500,
      "sentence": 30,
      "checked": false
    },
    {
      "reason": "Impersonating gov. employee",
      "cost": 10000,
      "sentence": 50,
      "checked": false
    },
    {
      "reason": "Money laundering",
      "cost": 5000,
      "sentence": 30,
      "checked": false
    },
    {
      "reason": "Falsifying evidence",
      "cost": 2000,
      "sentence": 40,
      "checked": false
    },
    {
      "reason": "Felony evasion",
      "cost": 2500,
      "sentence": 30,
      "checked": false
    },
    {
      "reason": "Possession of class 2",
      "cost": 15000,
      "sentence": 45,
      "checked": false
    },
    {
      "reason": "Possession of stolen property",
      "cost": 5000,
      "sentence": 35,
      "checked": false
    },
    {
      "reason": "Damages to gov property",
      "cost": 5000,
      "sentence": 30,
      "checked": false
    }    
  ]

  majorFelonies = [
    {
      "reason": "Fabrication of illegal substances",
      "cost": 20000,
      "sentence": 45,
      "checked": false
    },
    {
      "reason": "Attempted murder of a civ.",
      "cost": 4000,
      "sentence": 45,
      "checked": false
    },
    {
      "reason": "Attempted murder of a gov. employee",
      "cost": 6000,
      "sentence": 55,
      "checked": false
    },
    {
      "reason": "Murder of a civ.",
      "cost": 6000,
      "sentence": 60,
      "checked": false
    },
    {
      "reason": "Murder of a gov. employee",
      "cost": 10000,
      "sentence": 75,
      "checked": false
    },
    {
      "reason": "Selling drug locations",
      "cost": 40000,
      "sentence": 45,
      "checked": false

    },
    {
      "reason": "Theft of gov. property",
      "cost": 15000,
      "sentence": 45,
      "checked": false

    },
    {
      "reason": "Possession of class 3",
      "cost": 50000,
      "sentence": 60,
      "checked": false

    },
    {
      "reason": "Act of terrorism",
      "cost": 75000,
      "sentence": 120,
      "checked": false
    }
  ]


  constructor(private jailService : JailService){}

  ngOnInit() {
  }


  getTotals(misdemeanors, felonies1, felonies2, majorFelonies, i, cost, time){
    if(misdemeanors) {
      if(this.misdemeanors[i].checked === false){
        this.totalCost += cost
        this.totalTime += time
        this.misdemeanors[i].checked = true
        this.reasons.push(this.misdemeanors[i].reason)
      } else {
        this.totalCost -= cost
        this.totalTime -= time
        this.misdemeanors[i].checked = false
        this.reasons.splice(this.reasons.indexOf(this.misdemeanors[i].reason), 1)
      }
    }

    if(felonies1) { 
      if(this.felonies1[i].checked === false){
        this.totalCost += cost
        this.totalTime += time
        this.felonies1[i].checked = true
        this.reasons.push(this.felonies1[i].reason)
      } else {
        this.totalCost -= cost
        this.totalTime -= time
        this.felonies1[i].checked = false
        this.reasons.splice(this.reasons.indexOf(this.felonies1[i].reason), 1)
      }
    }

    if(felonies2) { 
      if(this.felonies2[i].checked === false){
        this.totalCost += cost
        this.totalTime += time
        this.felonies2[i].checked = true
        this.reasons.push(this.felonies2[i].reason)
      } else {
        this.totalCost -= cost
        this.totalTime -= time
        this.felonies2[i].checked = false
        this.reasons.splice(this.reasons.indexOf(this.felonies2[i].reason), 1)
      }
    }

    if(majorFelonies) {
      if(this.majorFelonies[i].checked === false){
        this.totalCost += cost
        this.totalTime += time
        this.majorFelonies[i].checked = true
        this.reasons.push(this.majorFelonies[i].reason)
      } else {
        this.totalCost -= cost;
        this.totalTime -= time;
        this.majorFelonies[i].checked = false;
        this.reasons.splice(this.reasons.indexOf(this.majorFelonies[i].reason), 1)
      }
    }
  }

  postJailData(){
    let ssn = this.citizensSSN

    const jailData = {
      totalCost: this.totalCost,
      totalTime: this.totalTime,
      ssn: parseInt(ssn),
      reasons: this.reasons
    }
    
    this.citizensSSN = "";
    this.totalTime = 0;
    this.totalCost = 0;

    this.jailService.postJailData(jailData).subscribe();
  }
}
