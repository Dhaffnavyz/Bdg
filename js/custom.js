function get_data_caseid(){var e=[];$.each($("input[name='caseid_check']:checked"),(function(){e.push($(this).val())})),""==e?alert("Checklist untuk proses TTD digital"):($(".ui.warning-modal-1").modal("show"),$("#case_id").val(e.join("-")))}function checkAll(e){console.log(e);var n=document.getElementsByTagName("input");if(e.checked)for(var t=0;t<n.length;t++)"checkbox"==n[t].type&&(n[t].checked=!0);else for(t=0;t<n.length;t++)"checkbox"==n[t].type&&(n[t].checked=!1)}$("body").on("click",".action.input input:text",(function(){$(this).val(""),$(this).parent().find("input:file").click()})),$("body").on("click",".action.input .clicable",(function(){$(this).parent().find("input:text.inputfile").val(""),$(this).parent().find("input:file").click()})),$("body").on("change","input:file",(function(e){if(e.target.files[0]&&"undefined"!==e.target.files[0]){var n=e.target.files[0].name;$("input:text",$(e.target).parent()).val(n)}})),jQuery.expr[":"].contains=function(e,n,t){return jQuery(e).text().toUpperCase().indexOf(t[3].toUpperCase())>=0},$("#searchLayanan").keyup((function(){searchText=$(this).val().toUpperCase(),column=".ui.grid.three.column .column",title=".ui.styled.fluid.accordion .title",content=".ui.styled.fluid.accordion .content",$(title).removeClass("active"),$(content).removeClass("active"),$(content).children().removeClass("visible"),$(content).children().removeClass("hidden"),$(column).removeClass("highlight"),$(column).parent().parent().parent().hide(),searchText.length>0?($(column).hide(),$(column).parent().parent().parent().hide(),$(column).parent().parent().parent().parent().hide(),$(column+":contains('"+searchText+"')").show(),$(column+":contains('"+searchText+"')").parent().parent().parent().show(),$(column+":contains('"+searchText+"')").parent().parent().parent().parent().show(),$(title+":contains('"+searchText+"')").length&&($(title+":contains('"+searchText+"')").addClass("active"),$(title+":contains('"+searchText+"')").parent().show(),$(content).addClass("active"),$(content).show(),$(content).children().addClass("active"),$(content).children().addClass("visible"),$(content).children().children().children().show()),$(column).addClass("highlight")):$(".ui.styled.fluid.accordion").show()})),$("#searchFaq").keyup((function(){searchText=$(this).val().toUpperCase(),column=".ui.grid .sixteen.column",title=".ui.styled.fluid.accordion .title",content=".ui.styled.fluid.accordion .content",$(title).removeClass("active"),$(content).removeClass("active"),$(content).children().removeClass("visible"),$(content).children().removeClass("hidden"),$(column).removeClass("highlight"),$(column).parent().parent().parent().hide(),searchText.length>0?($(column).hide(),$(column).parent().parent().parent().hide(),$(column).parent().parent().parent().parent().hide(),$(column+":contains('"+searchText+"')").show(),$(column+":contains('"+searchText+"')").parent().parent().parent().show(),$(column+":contains('"+searchText+"')").parent().parent().parent().parent().show(),$(title+":contains('"+searchText+"')").length&&($(title+":contains('"+searchText+"')").addClass("active"),$(title+":contains('"+searchText+"')").parent().show(),$(content).addClass("active"),$(content).show(),$(content).children().addClass("active"),$(content).children().addClass("visible"),$(content).children().children().children().show()),$(column).addClass("highlight")):$(".ui.styled.fluid.accordion").show()})),function(e){window.addRule=function(e,n,t){if("string"!=typeof n){var i="";for(var a in n){var s=n[a];i+=(a=a.replace(/([A-Z])/g,"-$1").toLowerCase())+":"+("content"===a?'"'+s+'"':s)+"; "}n=i}return(t=t||document.styleSheets[0]).insertRule?t.insertRule(e+" {"+n+"}",t.cssRules.length):t.addRule&&t.addRule(e,n),this},e&&(e.fn.addRule=function(e,n){return addRule(this.selector,e,n),this})}(window.jQuery),$(document).ready((function(){if($("#nib-resend-modal").length&&$("#nib-resend-modal").modal("show"),$(".kbli").select2(),$(".pse-p1").find(".ui.checkbox").checkbox(),$("table.pse-list tbody tr td, #pse-collapse").hover((function(){$(this).find(".title").hasClass("active")?$(this).find("span").html("Klik Untuk Menutup Detail"):$(this).find("span").html("Klik Untuk Menampilkan Detail"),$(this).find("span").show().fadeIn()}),(function(){$(this).find("span").hide()})),$("table.pse-list tbody tr td, #pse-collapse").click((function(){"Klik Untuk Menutup Detail"==$(this).find("span").html()?$(this).find("span").html("Klik Untuk Menampilkan Detail"):$(this).find("span").html("Klik Untuk Menutup Detail")})),$("#pse_kategori_se_before").length)if(""==$("#pse_kategori_se_before").val())$(".pse_nomor_izin_sektor, .pse_izin_document").hide(),$("[name^=pse_nomor_izin_sektor], [name^=pse_izin_document]").prop("required",!1),$("[name^=pse_nomor_izin_sektor], [name^=pse_izin_document]").prop("disabled",!0),$("[class^=subsektor-]").hide(),$("[class^=subsektor-]").prop("selected",!1);else{var e=$("#pse_kategori_se_before").val();e.indexOf("2")<0&&e.indexOf("4")<0?($(".pse_nomor_izin_sektor, .pse_izin_document").hide(),$("[name^=pse_nomor_izin_sektor], [name^=pse_izin_document]").prop("required",!1),$("[name^=pse_nomor_izin_sektor], [name^=pse_izin_document]").prop("disabled",!0)):($(".pse_nomor_izin_sektor, .pse_izin_document").show(),$("[name^=pse_nomor_izin_sektor], [name^=pse_izin_document]").prop("disabled",!1))}if($("#nib-ditolak-modal").length){var n=JSON.parse($("#nib-ditolak-list-json").text());$.each(n,(function(e,n){$("#nib-ditolak-list").html($("#nib-ditolak-list").html()+"- "+n+"<br>")})),$("#nib-ditolak-modal").modal("show")}$(document).on("click","#submit-survey",(function(e){if($("#pse-survey-info").length&&""!=$("[name=survei_saranpeningkatan]").val()){var n=$("#pse-cert-url").text();window.open(n,"_blank")}}))})),$("#pse-submit").prop("disabled",!1),$(document).ready((function(){$("[name=pse_sektor_lainnya]").empty().append('<option value="4">Sektor Keuangan</option><option value="2">Sektor Energi dan Sumber Daya Mineral</option>')})),$("[name=pse_nomor_izin]").on("change",(function(){$("[name^=pse_nomor_izin_sektor]").val($(this).val())})),$("[name=pse_lokasi]").on("change",(function(){$(".pse_nomor_izin_sektor, .pse_izin_document").hide(),$("[name^=pse_nomor_izin_sektor], [name^=pse_izin_document]").prop("required",!1),$("[name^=pse_nomor_izin_sektor], [name^=pse_izin_document]").prop("disabled",!0),"Lokal"==$(this).val()?($(".pse_nomor_izin, .pse_bentuk_bh, .pse_npwp_bh, .pse_akta_bh, .pse_is_certified, .pse_keamanan_se, .pse_sertifikat_document, .pse_pernyataan_document, .pse_kbli_bh").show(),$("[name=pse_sektor_lainnya]").empty().append('<option value="4">Sektor Keuangan</option><option value="2">Sektor Energi dan Sumber Daya Mineral</option>'),$("[name^=pse_kategori_se]").empty().append('<option value="4">Sektor Keuangan</option><option value="2">Sektor Energi dan Sumber Daya Mineral</option>'),$(".pse_akta_document").find("label").html("Dokumen Akta Perusahaan"),$(".pse_kbli").show(),$(".pse_kbli").find("select").prop("required",!0),$(".pse_kbli").find("select").prop("disabled",!1)):($(".pse_nomor_izin, .pse_bentuk_bh, .pse_npwp_bh, .pse_akta_bh, .pse_is_certified, .pse_keamanan_se, .pse_sertifikat_document, .pse_pernyataan_document, .pse_kbli_bh").hide(),$("[name=pse_sektor_lainnya], [name^=pse_kategori_se]").empty().append('<option value="2">Sektor Energi dan Sumber Daya Mineral</option><option value="5">Sektor Kesehatan</option><option value="4">Sektor Keuangan</option><option value="7">Sektor Pangan</option><option value="1">Sektor Perdagangan</option><option value="8">Sektor Pertahanan dan Keamanan</option><option value="6">Sektor Teknologi Informasi dan Komunikasi</option><option value="3">Sektor Transportasi</option>'),$(".pse_akta_document").find("label").html("Dokumen Inkorporasi</i>"),$(".pse_kbli").hide(),$(".pse_kbli").find("select").prop("required",!1),$(".pse_kbli").find("select").prop("disabled",!0))})),$("[name=pse_bentuk_bh]").on("change",(function(){"Perseorangan"==$(this).val()?$(".pse_akta_bh, .pse_akta_document").hide():$(".pse_akta_bh, .pse_akta_document").show()})),$(document).on("click","#add-se",(function(){var e=Math.floor(9e4*Math.random())+1e4;$("[data-tab=1]").removeClass("active"),$("#tab-se").find(".menu").append('<a class="item active" data-tab="'+e+'"><i class="icon eye"></i> <i data-index="'+e+'" class="hapus-se icon trash" title="Hapus Sistem Elektronik"></i></a>'),$("#tab-se").append('<div class="ui bottom attached active tab segment" data-tab="'+e+'" id="setab-'+e+'">'+$("#daftar-se").html().replace(/\[\]/g,e+"[]").replace(/class="hidden"/g,"")+"</div>"),$("[name^=pse_kategori_se"+e+"], [name^=pse_kbli"+e+"]").addClass("kbli"),$(".menu .item").tab(),$("#setab-"+e).find(".kbli").select2()})),$(document).on("click","#search-pse",(function(e){e.preventDefault();var n=$("[name=text-search-pse]").val();""!=n?$("[data-accordion-nib]").fadeOut():($("[data-accordion-nib]").fadeIn(),$("#empty-pse").hide()),$("[data-accordion-nib*="+n+"]").length>0?($("#empty-pse").hide(),$("[data-accordion-nib*="+n+"]").fadeIn(1e3)):$("#empty-pse").show()})),$(document).on("change","#kbli-sektor-lain",(function(){$(".kbli-sektor-lain").empty(),$.each($(this).find(":selected"),(function(){$(".kbli-sektor-lain").append('<option value="'+this.value+'">'+this.label+"</option>")}))})),$(document).on("click",".hapus-se",(function(){confirm("Apakah Anda yakin ingin menghapus data SE ini?")&&($(this).parent().remove(),$(".segment[data-tab="+$(this).data("index")+"]").remove(),$("[data-tab=1]").addClass("active"))})),$(document).on("click",".hapus-se-permanen",(function(){var e=$(this).data("case");$("#caseId-hapus").val(e),$("#hapus-se-modal").modal("show")})),$(document).on("click",".cabut-se",(function(){var e=$(this).data("case");$("#caseId-del").val(e),$("#confirm-del").modal("show")})),$(document).on("change",".report-pse",(function(){"0"==$("#jenis-report-pse").val()?$("#bulan-report-pse").closest("div").show():$("#bulan-report-pse").closest("div").hide()})),$(document).on("change","[name^=pse_is_website]",(function(){var e=$(this).attr("name").replace("pse_is_website","").replace("[]","");e?"0"==$(this).val()?($(".segment[data-tab="+e+"]").find(".pse_website").hide(),$(".segment[data-tab="+e+"]").find(".pse_website").find("input").prop("disabled",!0),$(".segment[data-tab="+e+"]").find(".pse_website").find("input").prop("required",!1)):($(".segment[data-tab="+e+"]").find(".pse_website").show(),$(".segment[data-tab="+e+"]").find(".pse_website").find("input").prop("disabled",!1),$(".segment[data-tab="+e+"]").find(".pse_website").find("input").prop("required",!0)):"0"==$(this).val()?($(".segment").find(".pse_website").hide(),$(".segment").find(".pse_website").find("input").prop("disabled",!0),$(".segment").find(".pse_website").find("input").prop("required",!1)):($(".segment").find(".pse_website").show(),$(".segment").find(".pse_website").find("input").prop("disabled",!1),$(".segment").find(".pse_website").find("input").prop("required",!0))})),$(document).on("change","[name^=pse_kategori_se]",(function(){var e=$(this).closest(".ui.bottom.attached.active.tab.segment").attr("id");$("#"+e).find(".pse_nomor_izin_sektor").hide(),$("#"+e).find(".pse_nomor_izin_sektor, .pse_izin_document").hide(),$("#"+e).find("[name^=pse_nomor_izin_sektor], [name^=pse_izin_document]").prop("required",!1),$("#"+e).find("[name^=pse_nomor_izin_sektor], [name^=pse_izin_document]").prop("disabled",!0),$("#"+e).find("[class^=subsektor-]").hide(),$("#"+e).find("[class^=subsektor-]").prop("selected",!1);var n=$("#pse_kategori_se_before").val();$.each($(this).dropdown("get value"),(function(){$("#"+e).find(".subsektor-"+this).show(),"2"!=this&&"4"!=this||($("#"+e).find(".pse_nomor_izin_sektor, .pse_izin_document").show(),n.indexOf("2")<0&&n.indexOf("4")<0&&($("#"+e).find("[name^=pse_nomor_izin_sektor], [name^=pse_izin_document]").prop("required",!0),$("#"+e).find("[name^=pse_nomor_izin_sektor], [name^=pse_izin_document]").prop("disabled",!1)))}))})),$(document).on("change","[name^=pse_izin_document], [name^=pse_akses_hukum], [name^=pse_akta_document]",(function(){var e=["jpg","png","pdf"];if(-1==$.inArray($(this).val().split(".").pop().toLowerCase(),e))return $(this).val(""),$(this).closest(".ui.action.input").find(".inputfile").val(""),alert("Tipe file yang didukung adalah : "+e.join(", ")),!1;var n=this.files[0].size;return console.log(n),n>1024e4?($(this).val(""),$(this).closest(".ui.action.input").find(".inputfile").val(""),alert("Ukuran file maksimum adalah 10 Mb "),!1):void 0}));