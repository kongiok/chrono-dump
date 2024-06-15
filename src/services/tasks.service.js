import { supabase } from '@/assets/utils';
import { useUserStore } from '../store/user.store';

export const sampleTasks = [
  {
    title: 'Design Landing Page',
    user_id: "ffa8c701-2ce3-43f4-8925-58471892cd44",
    description: 'Create an engaging and user-friendly landing page design',
    task_start: '2023-06-01 10:30:00+08:00',
    task_to: '2023-06-10 18:00:00+08:00',
    parent_task: null,
    priority: 2,
    status: 1,
    time_spent: 12
  },
  {
    title: 'Optimize Website Speed',
    user_id: "ffa8c701-2ce3-43f4-8925-58471892cd44",
    description: 'Improve website loading time and performance',
    task_start: '2023-05-20 09:00:00+08:00',
    task_to: '2023-05-31 17:30:00+08:00',
    parent_task: null,
    priority: 4,
    status: 2,
    time_spent: 24
  },
  {
    title: 'Develop Mobile App',
    user_id: "ffa8c701-2ce3-43f4-8925-58471892cd44",
    description: 'Build a cross-platform mobile application',
    task_start: '2023-06-15 14:00:00+08:00',
    task_to: '2023-07-01 19:00:00+08:00',
    parent_task: null,
    priority: 5,
    status: 1,
    time_spent: 32
  },
  {
    title: 'Conduct User Research',
    user_id: "ffa8c701-2ce3-43f4-8925-58471892cd44",
    description: 'Gather insights from target users through interviews and surveys',
    task_start: '2023-05-10 11:00:00+08:00',
    task_to: '2023-05-20 16:00:00+08:00',
    parent_task: null,
    priority: 3,
    status: 3,
    time_spent: 18
  },
  {
    title: 'Write Technical Documentation',
    user_id: "ffa8c701-2ce3-43f4-8925-58471892cd44",
    description: "Document the project's technical specifications and processes",
    task_start: '2023-06-05 13:30:00+08:00',
    task_to: '2023-06-20 15:00:00+08:00',
    parent_task: null,
    priority: 1,
    status: 1,
    time_spent: 22
  },
  {
    title: 'Implement Data Analytics',
    user_id: "ffa8c701-2ce3-43f4-8925-58471892cd44",
    description: 'Integrate a data analytics solution to track and analyze user behavior',
    task_start: '2023-05-25 16:00:00+08:00',
    task_to: '2023-06-10 18:30:00+08:00',
    parent_task: null,
    priority: 4,
    status: 2,
    time_spent: 27
  },
  {
    title: 'Refactor Codebase',
    user_id: "ffa8c701-2ce3-43f4-8925-58471892cd44",
    description: 'Optimize and refactor the existing codebase for better performance',
    task_start: '2023-06-01 09:30:00+08:00',
    task_to: '2023-06-15 17:00:00+08:00',
    parent_task: null,
    priority: 2,
    status: 1,
    time_spent: 19
  },
  {
    title: 'Improve UI/UX Design',
    user_id: "ffa8c701-2ce3-43f4-8925-58471892cd44",
    description: 'Enhance the user interface and user experience of the application',
    task_start: '2023-05-30 14:00:00+08:00',
    task_to: '2023-06-20 18:00:00+08:00',
    parent_task: null,
    priority: 4,
    status: 2,
    time_spent: 28
  }
];

export const createTasks = async (tasks) => {
  const { data, error } = await supabase.from('tasks').insert(tasks);
  if (error) {
    return { data: null, error: error.message };
  }
  return { data, error };
}
export const getAllTasks = async (user_id) => {
  console.log('user_id', user_id)
  const { data, error } = await supabase.from('tasks').select("*").eq('user_id', user_id);
  return { data, error };
}

export const getTaskById = async (id
) => {
  console.log('id', id)
  const { data, error } = await supabase.from('tasks').select().eq('id', parseInt(id));
  console.error('getTask By ID', error);
  return { data, error };
}

export const updateTaskTime = async (id, time) => {
  const { data, error } = await supabase.from('tasks').update({ time_spent: time }).eq('id', id).single();
  return { data, error };
}
