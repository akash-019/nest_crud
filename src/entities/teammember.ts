import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Task } from './task';
import { Team } from './team';
@Entity({ name: 'teammembers' })
export class TeamMembers {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => Team, (team) => team.id, { onDelete: 'CASCADE' })
  team: Team;

  @OneToMany(() => Task, (tasks) => tasks.assignee, {
    eager: true,
    onDelete: 'CASCADE',
  })
  tasks: Task[];
}
