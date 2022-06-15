import React, {useState} from "react";
import { StyleSheet, View } from "react-native";

import Estrela from "./Estrela";

export default function Estrelas({
    quantidade: quantidadeAntiga,  
    editavel = true,
    grande = true, 
}) {
    const [quantidade, setQuantidade] = useState(quantidadeAntiga);

    const RenderEstrelas = () => {
        const estrelas = [];
        for (let i = 0; i < 5; i++) {
            estrelas.push(
                <Estrela 
                key={i}
                onPress={() => setQuantidade(i+1)} 
                desabilitada={!editavel}
                preenchida={i < quantidade}
                grande={grande}
                />
            );
        }
        return estrelas;
    }

    return <View style={styles.estrelas}>
        <RenderEstrelas />
    </View>
}

const styles =  StyleSheet.create({
    estrelas: {
        flexDirection: 'row',
    },
});