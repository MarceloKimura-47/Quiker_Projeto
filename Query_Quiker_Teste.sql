select * from clientes;
select * from pedidos;



-- Query para trazer os 5 clientes que mais compraram:
	-- Realizei um join para conexão das duas bases e apliquei um alias nas tabelas.

select
	*
from
	pedidos pe
left join clientes cl
	on pe.cliente_id = cl.id
order by data_pedido desc
limit 5;


-- Query para trazer a média de vendas por mês:
	-- Para critério de organização, alterei o formato da data para ANO-MÊS.

select 
 	to_char(date_trunc('month',data_pedido),'YYYY-MM') as Ano_Mes,
	round(avg(total),2) as media_pedidos_mes
from 
	pedidos
where data_pedido between '2024-01-01' and '2025-12-31'
group by Ano_Mes
order by ano_mes asc;


