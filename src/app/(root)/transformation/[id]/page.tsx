"use client"
import { useParams } from 'next/navigation';
import React from 'react'

const TransformationPage = () => {
  const params : any = useParams();
  const id  = params.id;
  return (
    <>
      <div>
        Transformation Page - ID: {id}
      </div>
    </>
  );
}

export default TransformationPage
