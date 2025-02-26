$(document).ready(function(){
    $('.menu-hamburguer').click(function(){
        $('nav').slideToggle();
    });

    $('nav a').click(function(){
        $('nav').slideToggle();
    });

    $('.carousel').slick({
        autoplay: true
    });

    $('#cartão').mask('0000 0000 0000 0000', {
        placeholder: '0000 0000 0000 0000'
    })
    $('#válidade').mask('(00/00)', {
        placeholder: 'MM/AA'
    })
    $('#CVV').mask('000', {
        placeholder: '000'
    })

    $('.btn-pedido').click(function(){
        const destino = $('#Pagamento')

        $('form #pedidoEscolhido').val($(this).parent().find('.lanches').text())
        $('Html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    })

    function valida() {
        if ($('#Sn').is(':checked')) {
            $('.SN').css({
                position: 'absolute',
                bottom: '110px', // Atualizando o valor do bottom
                right: '25px'
            });
            if ($('#bairro').val() > ''){
                $('.SN').css({
                    position: 'absolute',
                    bottom: '92px',
                    right: '25px',
                })}
            return false;
        }else {
            $('.SN').css({
                position: 'absolute',
                bottom: '110px', // Atualizando o valor do bottom
                right: '25px'
            });
            return true;
        }
    }

    $('form').validate({
        errorClass: 'error',
        rules: {
            cartão: {
                required: true,
            },
            válidade: {
                required: true,
            },
            CVV: {
                required: true
            },
            options: {
                required: true,
            },
            titular: {
                required: true,            
            },
            nome: {
                required: true,
            },
            pedidoEscolhido: {
                required: true,
            },
            bairro: {
                required: true,
            },
            N: {
                required: function() {
                    return valida()
                }
            }
        },
        messages: {
            cartão:'Este campo é obrigatorio',
            válidade:'Este campo é obrigatorio',
            CVV:'Este campo é obrigatorio',
            options:'Este campo é obrigatorio',
            titular:'Este campo é obrigatorio',
            N: 'Este campo é obrigatorio',
            nome:'Este campo é obrigatorio',
            pedidoEscolhido:'Este campo é obrigatorio',
            bairro:'Este campo é obrigatorio',
        },
        submitHandler: function(form) {
            var formulário = form;
            console.log(formulário)
        },
        invalidHandler: function(evento, validador) {
            let validadorForm = validador.numberOfInvalids();
            console.log(validadorForm)
        }
    })
})