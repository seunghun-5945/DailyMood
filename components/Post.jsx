import React from "react";
import styled from "styled-components/native";
import { Dimensions, Text, Image } from "react-native";
import Icon from "react-native-vector-icons/Entypo";
import Icon2 from "react-native-vector-icons/Ionicons";

const Container = styled.View`
  width: 96%;
  height: 600px;
  display: flex;
  flex-direction: column;
  background-color: black;
  border-radius: 10px;
  margin-bottom: 10px;
`;

const Header = styled.View`
  width: 100%;
  height: 10%;
  display: flex;
  flex-direction: row;
`;

const ProfileFrame = styled.View`
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 5%;
`;

const ProfileImage = styled.Image`
  width: 45px;
  height: 45px;
  background-color: white;
  border-radius: 50px;
  margin-right: 5%;
`;

const FollowFrame = styled.View`
  width: 30%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FollowBtn = styled.TouchableOpacity`
  width: 80%;
  height: 70%;
  align-items: center;
  justify-content: center;
  background-color: transparent;
`;

const Main = styled.View`
  width: 100%;
  height: 70%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: gray;
`;

const Footer = styled.View`
  width: 100%;
  height: 20%;
  display: flex;
  flex-direction: column;
`;

const SocialFrame = styled.View`
  width: 100%;
  height: 40%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding-left: 5%;
`;

const ExplainFrame = styled.View`
  width: 100%;
  height: 60%;
  padding: 5%;
`;

const Post = ({ nick_name, explain, image, icon, like }) => {
  return (
    <Container>
      <Header>
        <ProfileFrame>
          <ProfileImage source={{ uri: icon }}/>
          <Text style={{ color: "white" }}>{nick_name}</Text>
        </ProfileFrame>
        <FollowFrame>
          <FollowBtn>
            <Text
              style={{
                color: "white",
                fontWeight: "bold",
                fontSize: 20,
                fontFamily: "continuous",
              }}
            >
              Follow
            </Text>
          </FollowBtn>
        </FollowFrame>
      </Header>
      <Main>
        <Image
          source={{ uri: image }} 
          style={{ width:"100%", height:"100%", resizeMode: "cover" }}
        />
      </Main>
      <Footer>
        <SocialFrame>
          <Icon2 name="flame-sharp" color="white" size={30} />
          <Icon name="chat" color="white" size={30} />
          <Icon2 name="rocket-outline" color="white" size={30} />
        </SocialFrame>
        <ExplainFrame>
          <Text style={{color:"white", fontSize: 17}}>burn: {like}</Text>
          <Text style={{ color: "lightgray", fontSize: 15 }}>{explain}</Text>
        </ExplainFrame>
      </Footer>
    </Container>
  );
};

export default Post;
