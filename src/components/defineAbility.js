import { defineAbility } from '@casl/ability';

export const ability = defineAbility((can, cannot) => {
	can('read', 'Todo', {id: [1, 3]})
	can('write', 'Todo', {id: [2, 4]})
});