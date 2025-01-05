import React from "react"
import styles from "../pages/page1.module.css"
import FormComp from "../components/forms/form"
import ListComp from "../components/listcomp/listcomp"
import { useUser } from "../context/usercontext"
import CallAPI from "../services/apicall"
import TextInput from "../components/textinput/textinput"
import useConsole from "../hooks/useconsole"
import RadioButtonGroup, { RadioButton } from "../components/radiobutton/radiobutton"
import PointMouseTracker from "../components/hoc/hocmouseposition"
import MousePointLogger from "../components/renderpops/renderprops"


const Page1 = () => {
    const {user} = useUser();

    const url = "https://randomuser.me/api/"

    useConsole(3)

    
    return (
        <div className={styles.page1}>
            page 1
            <div >
                <h2>{user.name}</h2>
                <ListComp/>
                <FormComp/>
                <CallAPI url = {url}/>
                <TextInput/>
                <RadioButtonGroup > 
                    <RadioButton id="button1"></RadioButton>
                </RadioButtonGroup>
                
                <PointMouseTracker/>

                <div>
                    cross-cutting concerns
                    <MousePointLogger render={(data) => <h1>{data}</h1>}/>
                </div>
                

            </div>
        </div>
    )
}

export default Page1;