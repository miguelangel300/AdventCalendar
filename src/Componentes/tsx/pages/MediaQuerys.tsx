import React from "react";

function MediaQuerys() {
  return (
    <div className="h-screen">
      <div className="p-4 m-2 font-bold text-center bg-orange-200 justify-cente">
        <h1 className="text-gray-600">Layout CSS con Grid y Flexbox</h1>
      </div>
      
      <div className="p-4 ">
        <div className="grid grid-cols-1 gap-4 p-4 bg-green-300 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col p-4 bg-red-200 border border-red-700 lg:col-span-1">
           <div className="flex m-2">
             <span className="mr-2 text-xl">😊</span>
            <h2 className="font-bold text-gray-800">Tarjeta 1</h2>
           </div>
            <p className="mb-2 text-sm text-gray-500">
              8 de mayo de 2024 12:00
            </p>
            <p className="mb-4 text-sm text-gray-500">Jairo García Rincón</p>
            <p className="text-gray-700">
              Este es el contenido de la tarjeta 1
            </p>
          </div>
          <div className="flex flex-col p-4 bg-red-200 border border-red-700 lg:col-span-1">
           <div className="flex m-2">
             <span className="mr-2 text-xl">😊</span>
            <h2 className="font-bold text-gray-800">Tarjeta 1</h2>
           </div>
            <p className="mb-2 text-sm text-gray-500">
              8 de mayo de 2024 12:00
            </p>
            <p className="mb-4 text-sm text-gray-500">Jairo García Rincón</p>
            <p className="text-gray-700">
              Este es el contenido de la tarjeta 1
            </p>
          </div>
          <div className="flex flex-col p-4 bg-red-200 border border-red-700 lg:col-span-1">
           <div className="flex m-2">
             <span className="mr-2 text-xl">😊</span>
            <h2 className="font-bold text-gray-800">Tarjeta 1</h2>
           </div>
            <p className="mb-2 text-sm text-gray-500">
              8 de mayo de 2024 12:00
            </p>
            <p className="mb-4 text-sm text-gray-500">Jairo García Rincón</p>
            <p className="text-gray-700">
              Este es el contenido de la tarjeta 1
            </p>
          </div>
          <div className="flex flex-col p-4 bg-red-200 border border-red-700 lg:col-span-1 lg:row-span-2 lg:row-start-2">
           <div className="flex m-2">
             <span className="mr-2 text-xl">😊</span>
            <h2 className="font-bold text-gray-800">Tarjeta 1</h2>
           </div>
            <p className="mb-2 text-sm text-gray-500">
              8 de mayo de 2024 12:00
            </p>
            <p className="mb-4 text-sm text-gray-500">Jairo García Rincón</p>
            <p className="text-gray-700">
              Este es el contenido de la tarjeta 1
            </p>
          </div>
          <div className="flex flex-col p-4 bg-red-200 border border-red-700 lg:col-span-2 ">
           <div className="flex m-2">
             <span className="mr-2 text-xl">😊</span>
            <h2 className="font-bold text-gray-800">Tarjeta 1</h2>
           </div>
            <p className="mb-2 text-sm text-gray-500">
              8 de mayo de 2024 12:00
            </p>
            <p className="mb-4 text-sm text-gray-500">Jairo García Rincón</p>
            <p className="text-gray-700">
              Este es el contenido de la tarjeta 1
            </p>
          </div>
          <div className="flex flex-col p-4 bg-red-200 border border-red-700 lg:col-span-1 lg:col-start-2">
           <div className="flex m-2">
             <span className="mr-2 text-xl">😊</span>
            <h2 className="font-bold text-gray-800">Tarjeta 1</h2>
           </div>
            <p className="mb-2 text-sm text-gray-500">
              8 de mayo de 2024 12:00
            </p>
            <p className="mb-4 text-sm text-gray-500">Jairo García Rincón</p>
            <p className="text-gray-700">
              Este es el contenido de la tarjeta 1
            </p>
          </div>
          <div className="flex flex-col p-4 bg-red-200 border border-red-700 lg:col-span-1 lg:col-start-3">
           <div className="flex m-2">
             <span className="mr-2 text-xl">😊</span>
            <h2 className="font-bold text-gray-800">Tarjeta 1</h2>
           </div>
            <p className="mb-2 text-sm text-gray-500">
              8 de mayo de 2024 12:00
            </p>
            <p className="mb-4 text-sm text-gray-500">Jairo García Rincón</p>
            <p className="text-gray-700">
              Este es el contenido de la tarjeta 1
            </p>
          </div>
        </div>
      </div>
      <div className="p-4 m-2 font-bold text-center bg-blue-200 justify-cente">
        <h1 className="font-bold">Mi footer</h1>
      </div>
    </div>
  );
}

export default MediaQuerys;
