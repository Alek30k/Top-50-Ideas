import { useLocation } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Tabs from "./components/Tabs";
import { db } from "./../../../utils/index";
import { Ideas } from "../../../utils/schema";
import { useEffect, useState } from "react";
import { desc } from "drizzle-orm";

const HomeScreen = () => {
  const params = useLocation();

  const [ideasList, setIdeasList] = useState([]);

  useEffect(() => {
    GetAllIdeas();
  }, [params]);

  const GetAllIdeas = async () => {
    const result = await db
      .select()
      .from(Ideas)
      .orderBy(desc(params.hash == "#hot" ? Ideas.vote : Ideas.id))
      .limit(20);
    setIdeasList(result);
  };

  return (
    <div className="">
      <Header />
      <Hero />
      <Tabs />
    </div>
  );
};

export default HomeScreen;
