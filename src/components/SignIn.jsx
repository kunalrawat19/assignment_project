import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs"
import { TabsDemo } from './Tabsdemo';
import RightComp from './RightComp';
import LeftComp from './LeftComp';


const SignIn = () => {
    return (
        <div className="h-screen flex">
        {/* Left Column (Image) */}
        <div className="flex-1 bg-white hidden md:block">
            <LeftComp />
        </div>

        {/* Right Column (Sign-In Form) */}
        <div className="flex-1 flex items-center justify-center bg-[#FAFAFA]">
            <div>
                <RightComp />
            </div>
        </div>
        </div>
    );
}

export default SignIn
