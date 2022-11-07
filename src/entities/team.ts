import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { TeamMembers } from './teammember';
@Entity({ name: 'teams' })
export class Team {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => TeamMembers, (teammembers) => teammembers.team, {
    eager: true,
    onDelete: 'CASCADE',
  })
  teammembers: TeamMembers[];
}
