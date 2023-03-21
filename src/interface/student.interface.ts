import {Document} from 'mongoose'

export interface IStudent extends Document{
    readonly name: string;
    readonly rollNumber: number;
    readonly Standard: number;
    readonly gender: string;
    readonly marks: number;
}