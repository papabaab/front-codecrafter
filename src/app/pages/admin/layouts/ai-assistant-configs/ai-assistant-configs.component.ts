
import { Component, OnInit } from '@angular/core';
import { AiConfigs } from 'app/models/aiconfigs.interface';
import { AiAssistantService } from 'app/services/ai-assistant/ai-assistant.service';

@Component({
  selector: 'app-ai-assistant-configs',
  templateUrl: './ai-assistant-configs.component.html',
  styleUrl: './ai-assistant-configs.component.scss'
})
// ------------------------------------------ AI ASSISTANT COMPONENT ------------------------------------------
export class AiAssistantConfigsComponent implements OnInit {

  // DEFAULT CONFIGS FOR AI ASSISTANT
  /** @TODO GET DATA FROM DATABASE */
  aiConfigs: AiConfigs = {
  assistantName: 'CODECRAFTER',
  systemInstructions: "Vous êtes un expert en finance travaillant dans une institution de microfinance. Vous recevrez des informations pertinentes sur la demande de prêt d'un client et il se peut que vous receviez également des documents du client pour justifier la raison de la demande de prêt et pour justifier sa solvabilité. Vous analyserez un objet JSON et des textes fournis par le client. Avant de déterminer sa solvabilité, vous devez analyser les 5 critères suivants : Caractère, Capacité, Condition, Garantie et Capital. Une fois que vous aurez une bonne idée de ces 5 critères, vous pourrez déterminer si le client est solvable. Si vous ne disposez pas de suffisamment d'informations sur la demande du client et sur sa situation financière, mentale et sociale, prenez le temps de prédire s'il est solvable. Vous finirez par déterminer un score de crédit allant de 0 à 100 %. Gardez à l'esprit que vous vous adressez au client lui-même et soyez bref et empathique. N'oubliez pas non plus qu'un agent financier de l'institution de microfinance examinera votre décision et qu'il est très important qu'il obtienne un pourcentage de solvabilité. Il faudra répondre en français car le client ne parle que le français.",
  model: 'gemini-1.5-flash',
  modelName: "Gemini 1.5 Flash",
  topK: '63',
  topP: '41',
  maxTokens: '120',
  temperature: '63'
};

// EDIT MODE
isEditing: {
  assistantName: boolean,
  systemInstructions: boolean,
  model: boolean,
  topK: boolean,
  topP: boolean,
  maxTokens: boolean,
  temperature: boolean
} = {
  assistantName: false,
  systemInstructions: false,
  model: false,
  topK: false,
  topP: false,
  maxTokens: false,
  temperature: false
};

// GEMINI LLM MODLES
models: any[] =[
  {name: "Gemini 1.5 Flash", value: 'gemini-1.5-flash'},
  {name: "Gemini 1.0 Pro", value: 'gemini-1.0-pro'},
  {name: "Gemini 1.0 Pro 001 (Tuning)", value: 'gemini-1.0-pro-001'},
  {name: "Gemini 1.5 Pro", value: 'gemini-1.5-pro'},
  {name: "Gemini 1.5 Pro Vision", value: 'gemini-1.0-pro-vision-latest'},
];




// ------------------------------------------ CONSTRUCTOR -------------------------------------------
    constructor(private aiAssistantService: AiAssistantService) {

     }



// ------------------------------------------ ON INIT ------------------------------------------
  async ngOnInit(){
  const configs = await this.aiAssistantService.getAiAssistantConfigs()
  console.log("AI ASSISTANT COMPONENT: ----> NGONINIT ", configs)
}



// ------------------------------------------ ON MODEL CHANGE ------------------------------------------
onModelChange(event: any){
  console.log("MODEL CHANGE: ", event)
  this.aiConfigs.modelName = this.models.find(model => model.value == event).name
  console.log("MODEL NAME: ", this.aiConfigs.modelName)
}
}
