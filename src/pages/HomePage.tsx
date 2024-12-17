import { useEffect, useState } from 'react';

const apiUrl = "http://localhost:8080/bible";

interface Passage {
   reference: string;
   biblicalText: string;
};

export default function ()
{
   const [passage, setPassage] = useState<Passage>();

   useEffect(()=>{
      const fetchPosts = async () =>{
         const response = await fetch(apiUrl);
         const passages = await response.json();
         setPassage(passages);
      };

      fetchPosts();
   }, [])

   return (
      <>
         {passage?.biblicalText ?? "No passage loaded"}
      </>
   );
};