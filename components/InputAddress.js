import React, { useState } from 'react';
import { TextInput, View } from 'react-native';

const InputAddress = () => {
    const inputAccessoryViewID = 'uniqueID';
    const initialText = '';
    const [text, setText] = useState(initialText);

    return (
        <View style={{
            padding: 10,
            marginTop: 10
        }}>
            <TextInput
                style={{
                    height: 50,
                    borderColor: 'gray',
                    borderWidth: 1,
                    padding: 10,
                    borderRadius: 5,
                }}
                inputAccessoryViewID={inputAccessoryViewID}
                onChangeText={setText}
                value={text}
                placeholder={'Shpping Address'}
            />
        </View>
    );
};

export default InputAddress;