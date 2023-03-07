import React from 'react'
import { routing } from '../../../configurations/routing';
import { AiOutlineFolderView } from 'react-icons/ai';
import { MdDeleteForever } from 'react-icons/md';


const MessageListPage = () => {
    return (
        <div class="h-full ml-14 mt-14 mb-10 md:ml-64">

            <div class="flex-1 px-2 sm:px-3 p-4">
                <div class="flex justify-between items-center">
                    <h3 class="text-3xl font-extralight text-white/50">Message Reçus </h3>
                    <div class="inline-flex items-center space-x-2">
                        <div><input type="text" class="py-2 px-3 text-gray-600 rounded-lg" placeholder="recherche ..." /></div>
                        <a class="bg-gray-900 text-white/50 p-2 rounded-md hover:text-white smooth-hover" href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                            </svg>
                        </a>
                    </div>
                </div>
                <div class="mb-10 sm:mb-0 mt-10 grid gap-4 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">

                    <div class="relative flex flex-wrap  group bg-gray-900 py-5 sm:py-5 px-4  space-y-2 items-center cursor-pointer rounded-md hover:bg-gray-900/80 hover:smooth-hover">
                        <div class="flex flex-wrap space-x-3">
                            <img class="w-20 h-20 object-cover object-center rounded-full" src="https://images.unsplash.com/photo-1547592180-85f173990554?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80" alt="cuisine" />
                            <div>
                                <h2 class=" font-bold">Nom complet</h2>
                                <p>email@mgail.com</p>
                            </div>
                        </div>
                        <div class="">
                            <h4 class="text-white text-2xl font-bold capitalize text-center">Cuisine</h4>
                            <p class=" bg-gray-900 w-full line-clamp-3">
                                {`
                            La définition de la méthode Desc est simple : Décrire – Exprimer – Spécifier – Conclure. Cet outil très simple d'utilisation permet de mieux communiquer avec les autres. Il est souvent utilisé par les managers d'équipe pour exposer une erreur réalisée par un
                            `}
                            </p>
                            <p class=" flex space-x-2 text-white/50 py-1 px-3 rounded-lg">
                                <a href={`/${routing.admin}/${routing.message_view}/:id`} class="bg-lime-500 hover:bg-lime-600 active:bg-lime-700 py-1 px-2 rounded-lg text-white"><AiOutlineFolderView class="h-7 w-7" /></a>
                                <a href={`/${routing.admin}/${routing.message_delete}/:id`} class="bg-red-500 hover:bg-red-600 active:bg-red-700 py-1 px-2 rounded-lg text-white"><MdDeleteForever class="h-7 w-7" /></a>
                            </p>
                        </div>
                        <p class="absolute top-2 right-3 text-gray-200 inline-flex items-center text-xs"> message<span class="ml-2 w-2 h-2 block bg-green-500 rounded-full group-hover:animate-pulse"></span></p>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default MessageListPage;