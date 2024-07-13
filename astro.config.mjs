import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Cook AI',
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			sidebar: [
				{
					label: '轻松上手',
					items: [
						{ label: '基础操作', slug: 'guides/example' },
						{ label: '使用场景', slug: 'guides/example' },
						{ label: '模型介绍', slug: 'guides/example' },
					],
				},
				{
					label: '定价',
					items: [
						{ label: '模型消耗', slug: 'reference/example' },
						{ label: '套餐价格', slug: 'reference/example' },
						{ label: '无限会员', slug: 'reference/example' },
					],
				},
				{
					label: '进阶使用',
					items: [
						{ label: '提示词技巧', slug: 'reference/example' },
						{ label: '工作案例', slug: 'reference/example' },
						{ label: '特殊模型', slug: 'reference/example' },
					],
				},
			],
		}),
	],
});
