var ARK3 = ARK3 || {};

ARK3.Controller = (function ($) {

    var init = function () {

        $('.button-basic').click(function() {
            $('.progression li').removeClass('active');
            $(this).addClass('active');
            ARK3.View.hideProgressPanels();
            ARK3.View.showBasicPanels();
        });
        $('.button-detail').click(function() {
            $('.progression li').removeClass('active');
            $(this).addClass('active');
            ARK3.View.hideProgressPanels();
            ARK3.View.showDetailPanels();
        });
        $('.button-finalize').click(function() {
            $('.progression li').removeClass('active');
            $(this).addClass('active');
            ARK3.View.hideProgressPanels();
            ARK3.View.showFinalizePanels();
        });
        $('.button-male').click(function() {
            $('.gender-options li').removeClass('active');
            $(this).addClass('active');
            ARK3.View.changeFormOnClick('male');
            ARK3.Model.genderSetter();
        });
        $('.button-female').click(function() {
            $('.gender-options li').removeClass('active');
            $(this).addClass('active');
            ARK3.View.changeFormOnClick('female');
            ARK3.Model.genderSetter();
        });
        $('.button-human').click(function() {
            $('.race-options li').removeClass('active');
            $(this).addClass('active');
            ARK3.View.changeFormOnClick('human');
            ARK3.Model.raceSetter();
        });
        $('.button-robot').click(function() {
            $('.race-options li').removeClass('active');
            $(this).addClass('active');
            ARK3.View.changeFormOnClick('robot');
            ARK3.Model.raceSetter();
        });
        $('.button-barbarian').click(function() {
            $('.race-options li').removeClass('active');
            $(this).addClass('active');
            ARK3.View.changeFormOnClick('barbarian');
            ARK3.Model.raceSetter();
        });
        $('.button-dwarf').click(function() {
            $('.race-options li').removeClass('active');
            $(this).addClass('active');
            ARK3.View.changeFormOnClick('dwarf');
            ARK3.Model.raceSetter();
        });
        $('.button-elf').click(function() {
            $('.race-options li').removeClass('active');
            $(this).addClass('active');
            ARK3.View.changeFormOnClick('elf');
            ARK3.Model.raceSetter();
        });
        $('.button-warrior').click(function() {
            $('.profession-options li').removeClass('active');
            $(this).addClass('active');
            ARK3.View.changeFormOnClick('warrior');
            ARK3.Model.professionSetter();
        });
        $('.button-wizard').click(function() {
            $('.profession-options li').removeClass('active');
            $(this).addClass('active');
            ARK3.View.changeFormOnClick('wizard');
            ARK3.Model.professionSetter();
        });
        $('.button-thief').click(function() {
            $('.profession-options li').removeClass('active');
            $(this).addClass('active');
            ARK3.View.changeFormOnClick('thief');
            ARK3.Model.professionSetter();
        });
        $('.button-explorer').click(function() {
            $('.profession-options li').removeClass('active');
            $(this).addClass('active');
            ARK3.View.changeFormOnClick('explorer');
            ARK3.Model.professionSetter();
        });
        $('.button-detective').click(function() {
            $('.profession-options li').removeClass('active');
            $(this).addClass('active');
            ARK3.View.changeFormOnClick('detective');
            ARK3.Model.professionSetter();
        });
        $('.button-hairstyle-left').click(function() {
            $('.detail-options li').removeClass('active');
            $('.button-hairstyle').addClass('active');
            ARK3.View.changeHairstyleOnCycle('left');
            ARK3.Model.hairStyleSetter();
        });
        $('.button-hairstyle-right').click(function() {
            $('.detail-options li').removeClass('active');
            $('.button-hairstyle').addClass('active');
            ARK3.View.changeHairstyleOnCycle('right');
            ARK3.Model.hairStyleSetter();
        });
        $('.button-haircolor-left').click(function() {
            $('.detail-options li').removeClass('active');
            $('.button-haircolor').addClass('active');
            ARK3.View.changeHaircolorOnCycle('left');
            ARK3.Model.hairColorSetter();
        });
        $('.button-haircolor-right').click(function() {
            $('.detail-options li').removeClass('active');
            $('.button-haircolor').addClass('active');
            ARK3.View.changeHaircolorOnCycle('right');
            ARK3.Model.hairColorSetter();
        });
        $('.button-face-left').click(function() {
            $('.detail-options li').removeClass('active');
            $('.button-face').addClass('active');
            ARK3.View.changeFacesOnCycle('left');
            ARK3.Model.faceSetter();
        });
        $('.button-face-right').click(function() {
            $('.detail-options li').removeClass('active');
            $('.button-face').addClass('active');
            ARK3.View.changeFacesOnCycle('right');
            ARK3.Model.faceSetter();
        });
        $('.button-clothescolor-left').click(function() {
            $('.detail-options li').removeClass('active');
            $('.button-clothescolor').addClass('active');
            ARK3.View.changeClothesColorOnCycle('left');
            ARK3.Model.clothesColorSetter();
        });
        $('.button-clothescolor-right').click(function() {
            $('.detail-options li').removeClass('active');
            $('.button-clothescolor').addClass('active');
            ARK3.View.changeClothesColorOnCycle('right');
            ARK3.Model.clothesColorSetter();
        });
        $('.button-skincolor-left').click(function() {
            $('.detail-options li').removeClass('active');
            $('.button-skincolor').addClass('active');
            ARK3.View.changeSkinColorOnCycle('left');
            ARK3.Model.skinColorSetter();
        });
        $('.button-skincolor-right').click(function() {
            $('.detail-options li').removeClass('active');
            $('.button-skincolor').addClass('active');
            ARK3.View.changeSkinColorOnCycle('right');
            ARK3.Model.skinColorSetter();
        });
        $('.button-weapon-left').click(function() {
            $('.detail-options li').removeClass('active');
            $('.button-weapon').addClass('active');
            ARK3.View.changeWeaponOnCycle('left');
            ARK3.Model.weaponSetter();
        });
        $('.button-weapon-right').click(function() {
            $('.detail-options li').removeClass('active');
            $('.button-weapon').addClass('active');
            ARK3.View.changeWeaponOnCycle('right');
            ARK3.Model.weaponSetter();
        });
        $('.nav').click(function() {
            var $this = this;
            ARK3.View.buttonClickEffect($this);
            ARK3.Model.setCharacter();
            ARK3.View.renderCharacter();
        });

        //Inventory for mobile view click
        $('.head').click(function() {
            ARK3.View.renderInventoryItem('head');
        });
        $('.chest').click(function() {
            ARK3.View.renderInventoryItem('chest');
        });
        $('.feet').click(function() {
            ARK3.View.renderInventoryItem('feet');
        });
        $('.weapon').click(function() {
            ARK3.View.renderInventoryItem('weapon');
        });


        //Tooltip stuff
        $('img, div').powerTip({
            followMouse: true
        });

        $('.hp-img').data('powertip', '<b>This is how many hit points you have.</b><br>' +
            'Your Stamina modifier increases your hit points.');

        $('.ac-img').data('powertip', '<b>This is your armor class.</b><br>' +
            'Your AC is calculated from your armor quality and AGI modifier.');

        $('.stat-str, .value-str').data('powertip', '<b>This is your Strength attribute.</b>');

        $('.stat-sta, .value-sta').data('powertip', '<b>This is your Stamina attribute.</b>');

        $('.stat-agi, .value-agi').data('powertip', '<b>This is your Agility attribute.</b>');

        $('.stat-wit, .value-wit').data('powertip', '<b>This is your Strength attribute.</b>');

        $('.stat-per, .value-per').data('powertip', '<b>This is your Personality attribute.</b>');

        $('.stat-lck, .value-lck').data('powertip', '<b>This is your Luck attribute.</b>');


        $('.value-strmod').data('powertip', '<b>This is your Strength modifier.</b><br>' +
            'Your modifier determines how well you perform<br>' +
            'in skill-checks based on that stat');

        $('.value-stamod').data('powertip', '<b>This is your Stamina modifier.</b><br>' +
            'Your modifier determines how well you perform<br>' +
            'in skill-checks based on that stat');

        $('.value-agimod').data('powertip', '<b>This is your Agility modifier.</b><br>' +
            'Your modifier determines how well you perform<br>' +
            'in skill-checks based on that stat');

        $('.value-witmod').data('powertip', '<b>This is your Strength modifier.</b><br>' +
            'Your modifier determines how well you perform<br>' +
            'in skill-checks based on that stat');

        $('.value-permod').data('powertip', '<b>This is your Personality modifier.</b><br>' +
            'Your modifier determines how well you perform<br>' +
            'in skill-checks based on that stat');

        $('.value-lckmod').data('powertip', '<b>This is your Luck modifier.</b><br>' +
            'Your modifier determines how well you perform<br>' +
            'in skill-checks based on that stat');

    };

    return {

        init: init

    };

}(jQuery));