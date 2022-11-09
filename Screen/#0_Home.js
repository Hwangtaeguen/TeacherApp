import {View, Button, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Image } from "react-native"
import { useNavigation } from '@react-navigation/native';

//이미지 URL 객체
const imageURL={
    'Todd' :  require("../assets/Todd.png"),
    'Jen' :  require("../assets/Jen.png"),
    'Ava' :  require("../assets/Ava.png"),
    'Mario' :  require("../assets/Mario.png")
}

//TouchableOpacity(클릭에 반응하는) 캐릭터 생성 컴포넌트
const Choose = (props) =>{
    return (
        <TouchableOpacity
            onPress={() => props.navigation.navigate("StartQ")}
            style={{width:40,height:40,alignItems:'center'}}>
            <Image
            style={{
                width: 115,
                height: 115,
                overflow: 'hidden'
            }}
            source = {imageURL[props.name]}
            />
            <Text style={{width:100, height:20, textAlign:'center'}}>{props.title}</Text>
         </TouchableOpacity>
    );
}  

//HOME VIEW
const Home = (props) => {
    return (
        <View style = {{flex:1,paddind:40}}>
            <View style={{flex:0.1}}/>
            <View style = {{
                flex:1,
                flexDirection:'column',
                justifyContent:'space-around',
                alignItems:'center'
                }}>
                <Image
                style={{width:40,height:40}}
                source = {require("../assets/smiling-face.png")}/>
                <Text style={{fontSize:25, fontWeight:'bold'}}>CHOOSE WHAT YOU WANT!</Text>
            </View>
            <View style = {styles.Character}>
                    <TouchableOpacity
                    onPress={() => props.navigation.navigate ("StartQ")}
                    style={{width:40,height:40,alignItems:'center'}}>
                    <Image
                    style={{
                        width: 115,
                        height: 115,
                        overflow: 'hidden'
                    }}
                    source = {require("../assets/Todd.png")}
                    />
                </TouchableOpacity>
                <Choose name = 'Jen' title = "Jen's Curtains"/>
                <Choose name = 'Todd' title = "Todd's Order"/>
            </View>
            <View style = {styles.Character}>
                <Choose name = 'Ava' title = "Ava's Goal"/>
                <Choose name = 'Mario' title = "Mario's Trip"/>
            </View>
            <View style={{flex:2}}></View>
        </View>
    );
}

const styles = StyleSheet.create({
    Character:{
        flex:2,
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center'
    }
});

export default Home;