import { Text, View, TextInput, TouchableOpacity, FlatList, Alert } from 'react-native';
import { styles } from './styles';
import { Participant } from '../../components/Participant';

export function Home() {
const participants = [
  'Mateus Macedo',
 'Beatriz Sena', 'Lukitchu', 'Heres', 'Ana', 'Natalia',
  'Giulia', 'Eduardo', 'Graciellen', 'Kim',
];

function handleParticipantAdd() {
    if(participants.includes("Heres")){
      return Alert.alert("Participante Duplicado" , "Já existe um participante na lista com esse nome")
    }
}

function handleParticipantRemove(name: String) {
   Alert.alert("Remover" , `Deseja remover o participante ${name} ?` , [
    {
      text: 'Sim',
      onPress: () => Alert.alert("Deletado!")
    },
    {
      text: 'Não',
      style: 'cancel'
    }
   ])
}


  return(
    <View style= {styles.container}>
      <Text style= {styles.eventName}
        >Nome do Evento
      </Text>  
      <Text style= {styles.eventDate}
      >Sexta, 4 de Novembro de 2022.</Text>
       
      <View style= {styles.form}>
      <TextInput 
         style = {styles.input} 
         placeholder="Nome do Participante"
         placeholderTextColor= "#6B6B6B"
      />

        <TouchableOpacity style= {styles.button} onPress= {handleParticipantAdd}>
            <Text style= {styles.buttonText}>
                + 
            </Text>
        </TouchableOpacity>
      </View>

      <FlatList 
        data= {participants}
        keyExtractor={item => item }
        renderItem={({ item }) => (
          <Participant 
              key={item}
              name= {item}
              onRemove= {() => handleParticipantRemove(item)}
      />
    )}  
      showsVerticalScrollIndicator={false}
      ListEmptyComponent={() => (
         <Text style= {styles.ListEmptyText}>
              Ninguém chegou no evento ainda? Adicione participantes na sua lista de presença.
         </Text>
      )}
    />
    </View>
  )
}
