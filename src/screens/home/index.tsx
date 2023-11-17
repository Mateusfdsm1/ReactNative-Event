import { Text, View, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { styles } from './styles';
import { Participant } from '../../components/Participant';

export function Home() {
const participants = [
  'Mateus Macedo',
 'Beatriz Sena', 'Lukitchu', 'Heres', 'Ana', 'Natalia',
  'Giulia', 'Eduardo', 'Graciellen', 'Kim',
];

function handleParticipantAdd() {
    console.log("Teste clique");
}

function handleParticipantRemove(name: String) {
  console.log (`Clicou em remover ${name}`)
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
              onRemove= {() => handleParticipantRemove("Mateus Macedo")}
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
