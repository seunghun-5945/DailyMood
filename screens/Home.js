import React from "react";
import styled from "styled-components/native";
import Header from "../components/Header";
import Post from "../components/Post";
import { ScrollView } from "react-native";
import profile from "../profile.json";

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: white;
`;

const Main = styled.View`
  width: 100%;
  align-items: center;
`;

const Home = () => {
  return (
    <Container>
      <Header />
      <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
        {profile.map((item, index) => (
          <Post 
            key={index} 
            icon={item.icon}
            like={item.like}
            nick_name={item.nick_name}
            explain={item.explain}
            image={item.image}
          />
        ))}
      </ScrollView>
    </Container>
  );
};

export default Home;
