import User from '@modules/users/typeorm/entities/User';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('experience')
class Experience {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  company: string;

  @Column()
  role: string;

  @Column()
  description: string;

  @Column('time with time zone')
  startedOn: Date;

  @Column('time with time zone')
  endedOn: Date;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  // @ManyToOne(() => User, user => user.id)
  // user: User;
}

export default Experience;
