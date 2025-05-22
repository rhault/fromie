interface OrderData {
  cabecalho: {
    bloqueado: string;
    codigo_cenario_impostos: string;
    codigo_cliente: number;
    codigo_empresa: number;
    codigo_parcela: string;
    codigo_pedido: number;
    codigo_pedido_integracao: string;
    data_previsao: string;
    enc_data: string;
    enc_hora: string;
    enc_motivo: string;
    enc_user: string;
    encerrado: string;
    etapa: string;
    importado_api: string;
    numero_pedido: string;
    origem_pedido: string;
    qtde_parcelas: number;
    quantidade_itens: number;
  };
  departamentos: any[];
  det: {
    combustivel: {};
    ide: {
      codigo_item: number;
      codigo_item_integracao: string;
      simples_nacional: string;
    };
    imposto: {
      cofins_padrao: {
        aliq_cofins: number;
        base_cofins: number;
        cod_sit_trib_cofins: string;
        qtde_unid_trib_cofins: number;
        tipo_calculo_cofins: string;
        valor_cofins: number;
        valor_unid_trib_cofins: number;
      };
      cofins_st: {
        aliq_cofins_st: number;
        base_cofins_st: number;
        cod_sit_trib_cofins_st: string;
        margem_cofins_st: number;
        qtde_unid_trib_cofins_st: number;
        tipo_calculo_cofins_st: string;
        valor_cofins_st: number;
        valor_unid_trib_cofins_st: number;
      };
      csll: {
        aliq_csll: number;
        valor_csll: number;
      };
      icms: {};
      icms_efet: {};
      icms_ie: {
        aliq_icms_FCP: number;
        aliq_interestadual: number;
        aliq_interna_uf_destino: number;
        aliq_partilha_icms: number;
        base_icms_uf_destino: number;
        valor_fcp_icms_inter: number;
        valor_icms_uf_dest: number;
        valor_icms_uf_remet: number;
      };
      icms_sn: {
        aliq_icms_sn: number;
        base_icms_sn: number;
        cod_sit_trib_icms_sn: string;
        origem_icms_sn: string;
        valor_credito_icms_sn: number;
        valor_icms_sn: number;
      };
      icms_st: {
        aliq_icms_opprop: number;
        aliq_icms_st: number;
        base_icms_st: number;
        cest: string;
        cod_sit_trib_icms_st: string;
        margem_icms_st: number;
        modalidade_icms_st: string;
        perc_red_base_icms_op: number;
        perc_red_base_icms_st: number;
        valor_icms_st: number;
      };
      inss: {
        aliq_inss: number;
        valor_inss: number;
      };
      ipi: {
        aliq_ipi: number;
        base_ipi: number;
        cod_sit_trib_ipi: string;
        enquadramento_ipi: string;
        qtde_unid_trib_ipi: number;
        tipo_calculo_ipi: string;
        valor_ipi: number;
        valor_unid_trib_ipi: number;
      };
      irrf: {
        aliq_irrf: number;
        valor_irrf: number;
      };
      iss: {
        aliq_iss: number;
        base_iss: number;
        retem_iss: string;
        valor_iss: number;
      };
      pis_padrao: {
        aliq_pis: number;
        base_pis: number;
        cod_sit_trib_pis: string;
        qtde_unid_trib_pis: number;
        tipo_calculo_pis: string;
        valor_pis: number;
        valor_unid_trib_pis: number;
      };
      pis_st: {
        aliq_pis_st: number;
        base_pis_st: number;
        cod_sit_trib_pis_st: string;
        margem_pis_st: number;
        qtde_unid_trib_pis_st: number;
        tipo_calculo_pis_st: string;
        valor_pis_st: number;
        valor_unid_trib_pis_st: number;
      };
    };
    inf_adic: {
      codigo_categoria_item: string;
      codigo_cenario_impostos_item: string;
      codigo_local_estoque: number;
      dados_adicionais_item: string;
      item_pedido_compra: number;
      nao_gerar_financeiro: string;
      nao_movimentar_estoque: string;
      nao_somar_total: string;
      numero_pedido_compra: string;
      peso_bruto: number;
      peso_liquido: number;
    };
    observacao: {};
    produto: {
      cfop: string;
      cnpj_fabricante: string;
      codigo: string;
      codigo_produto: number;
      codigo_tabela_preco: number;
      descricao: string;
      ean: string;
      indicador_escala: string;
      motivo_icms_desonerado: string;
      ncm: string;
      percentual_desconto: number;
      quantidade: number;
      reservado: string;
      tipo_desconto: string;
      unidade: string;
      valor_deducao: number;
      valor_desconto: number;
      valor_icms_desonerado: number;
      valor_mercadoria: number;
      valor_total: number;
      valor_unitario: number;
    };
    rastreabilidade: {};
    tributavel: {};
  }[];
  exportacao: {
    nao_exportacao: string;
  };
  frete: {
    codigo_rastreio: string;
    codigo_tipo_entrega: number;
    codigo_transportadora: number;
    especie_volumes: string;
    marca_volumes: string;
    modalidade: string;
    numeracao_volumes: string;
    numero_lacre: string;
    outras_despesas: number;
    peso_bruto: number;
    peso_liquido: number;
    placa: string;
    placa_estado: string;
    previsao_entrega: string;
    quantidade_volumes: number;
    registro_transportador: string;
    valor_frete: number;
    valor_seguro: number;
    veiculo_proprio: string;
  };
  infoCadastro: {
    autorizado: string;
    cImpAPI: string;
    cancelado: string;
    dAlt: string;
    dInc: string;
    denegado: string;
    devolvido: string;
    devolvido_parcial: string;
    faturado: string;
    hAlt: string;
    hInc: string;
    uAlt: string;
    uInc: string;
  };
  informacoes_adicionais: {
    codProj: number;
    codVend: number;
    codigo_categoria: string;
    codigo_conta_corrente: number;
    consumidor_final: string;
    contato: string;
    dados_adicionais_nf: string;
    enviar_email: string;
    enviar_pix: string;
    numero_contrato: string;
    numero_pedido_cliente: string;
    outros_detalhes: {};
    utilizar_emails: string;
  };
  lista_parcelas: {
    parcela: {
      data_vencimento: string;
      meio_pagamento: string;
      numero_parcela: number;
      percentual: number;
      quantidade_dias: number;
      tipo_documento: string;
      valor: number;
    }[];
  };
  observacoes: {
    obs_venda: string;
  };
  total_pedido: {
    base_calculo_icms: number;
    base_calculo_st: number;
    valor_IPI: number;
    valor_cofins: number;
    valor_csll: number;
    valor_deducoes: number;
    valor_descontos: number;
    valor_icms: number;
    valor_inss: number;
    valor_ir: number;
    valor_iss: number;
    valor_mercadorias: number;
    valor_pis: number;
    valor_st: number;
    valor_total_pedido: number;
  };
}

export default OrderData;
