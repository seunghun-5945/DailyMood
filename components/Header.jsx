import React from "react";
import styled from "styled-components/native";
import { Text } from "react-native";
import Icon from "react-native-vector-icons/Entypo"
import Icon2 from "react-native-vector-icons/AntDesign"
import { useNavigation } from "@react-navigation/native";

const Container = styled.View`
  width: 100%;
  height: 10%;
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid lightgray;
`;

const TitleIconFrame = styled.View`
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding-left: 5%;
`;

const AlarmFrame = styled.View`
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding-right: 5%;
`;

const Header = () => {
  const navigation = useNavigation();

  return (
    <Container>
      <TitleIconFrame>
        <Text style={{fontSize:30, fontFamily:'continuous', color:"black"}}>DailyMood</Text>
      </TitleIconFrame>
      <AlarmFrame>
        <Icon2 onPress={() => navigation.navigate('Search')} name="heart" color="red" size={30}/>
        <Icon name="chat" color="black" size={30} />
      </AlarmFrame>
    </Container>
  );
};

export default Header;