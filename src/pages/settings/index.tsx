"use client"

import classes from './index.module.scss';
import { useState, useEffect } from "react";
import { templates } from "../api/templates";


export default function handler() {
    let tempList = templates;
    return (
        <div className={classes.container}>
            <h1 className='font-bold text-3xl'>Settings</h1>
            <p>Settings page</p>
            <p>{templates.pcStackTemplate}</p>
        </div>
    );
}
