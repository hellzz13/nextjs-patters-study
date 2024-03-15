import List from "@/src/components/List";
import React from "react";
import ServerList from "../components/ServerList";
import Loading from "../components/Loading";

export default function Home() {
  return (
    <div className="container mx-auto">
      <ServerList />
    </div>
  );
}
