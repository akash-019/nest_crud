import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { TeamMembers } from './teammember';
@Entity({ name: 'task' })
export class Task {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  due_date: Date;

  @Column()
  status: string;

  @ManyToOne(() => TeamMembers, (teammember) => teammember.tasks, {
    onDelete: 'CASCADE',
  })
  assignee: TeamMembers;
}
