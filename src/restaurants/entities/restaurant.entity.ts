import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { IsBoolean, IsOptional, IsString, Length } from 'class-validator';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@InputType({ isAbstract: true })
@ObjectType()
@Entity()
export class Restaurant {
    @PrimaryGeneratedColumn()
    @Field(type => Number)
    id: number;

    @Field(type => String)
    @Column()
    @IsString()
    @Length(5)
    name: string;

    @Field(type => Boolean, { nullable: true, defaultValue: false }) // for graphql
    @Column({ default: false }) // for database
    @IsOptional() // for dto
    @IsBoolean()
    isVegan: boolean;

    @Field(type => String, { nullable: true, defaultValue: null })
    @Column({ default: null })
    @IsOptional()
    @IsString()
    address: string;

    @Field(type => String)
    @Column()
    @IsString()
    ownersName: string;

    @Field(type => String)
    @Column()
    @IsString()
    categoryName: string;
}