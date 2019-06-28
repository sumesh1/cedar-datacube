Search.setIndex({docnames:["api","cedar/cedar","cedar/cedar.cli","cedar/cedar.cli.auth","cedar/cedar.cli.config","cedar/cedar.cli.console","cedar/cedar.cli.convert","cedar/cedar.cli.gee","cedar/cedar.cli.main","cedar/cedar.cli.options","cedar/cedar.cli.status","cedar/cedar.cli.storage","cedar/cedar.cli.submit","cedar/cedar.config","cedar/cedar.config.build","cedar/cedar.config.core","cedar/cedar.config.parse","cedar/cedar.defaults","cedar/cedar.exceptions","cedar/cedar.ordering","cedar/cedar.preard","cedar/cedar.sensors","cedar/cedar.sensors.common","cedar/cedar.sensors.landsat","cedar/cedar.stores","cedar/cedar.stores.gcs","cedar/cedar.stores.gdrive","cedar/cedar.tests","cedar/cedar.tests.test_cedar","cedar/cedar.tests.test_tracking","cedar/cedar.tracking","cedar/cedar.utils","cedar/modules","cleaning","cli","config","convert","credentials","dev","download","faq","history","index","install","overview","storage","submissions","tracking"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,"sphinx.ext.intersphinx":1,"sphinx.ext.todo":1,"sphinx.ext.viewcode":1,sphinx:56},filenames:["api.rst","cedar/cedar.rst","cedar/cedar.cli.rst","cedar/cedar.cli.auth.rst","cedar/cedar.cli.config.rst","cedar/cedar.cli.console.rst","cedar/cedar.cli.convert.rst","cedar/cedar.cli.gee.rst","cedar/cedar.cli.main.rst","cedar/cedar.cli.options.rst","cedar/cedar.cli.status.rst","cedar/cedar.cli.storage.rst","cedar/cedar.cli.submit.rst","cedar/cedar.config.rst","cedar/cedar.config.build.rst","cedar/cedar.config.core.rst","cedar/cedar.config.parse.rst","cedar/cedar.defaults.rst","cedar/cedar.exceptions.rst","cedar/cedar.ordering.rst","cedar/cedar.preard.rst","cedar/cedar.sensors.rst","cedar/cedar.sensors.common.rst","cedar/cedar.sensors.landsat.rst","cedar/cedar.stores.rst","cedar/cedar.stores.gcs.rst","cedar/cedar.stores.gdrive.rst","cedar/cedar.tests.rst","cedar/cedar.tests.test_cedar.rst","cedar/cedar.tests.test_tracking.rst","cedar/cedar.tracking.rst","cedar/cedar.utils.rst","cedar/modules.rst","cleaning.rst","cli.rst","config.rst","convert.rst","credentials.rst","dev.rst","download.rst","faq.rst","history.rst","index.rst","install.rst","overview.rst","storage.rst","submissions.rst","tracking.rst"],objects:{"":{cedar:[1,0,0,"-"]},"cedar.cli":{auth:[3,0,0,"-"],config:[4,0,0,"-"],console:[5,0,0,"-"],convert:[6,0,0,"-"],gee:[7,0,0,"-"],main:[8,0,0,"-"],options:[9,0,0,"-"],status:[10,0,0,"-"],storage:[11,0,0,"-"],submit:[12,0,0,"-"]},"cedar.cli.convert":{create_dest_dir:[6,1,1,""]},"cedar.cli.options":{STYLE_DEBUG:[9,1,1,""],STYLE_ERROR:[9,1,1,""],STYLE_INFO:[9,1,1,""],STYLE_WARNING:[9,1,1,""],fetch_config:[9,1,1,""],fetch_param:[9,1,1,""]},"cedar.config":{build:[14,0,0,"-"],core:[15,0,0,"-"],parse:[16,0,0,"-"]},"cedar.config.build":{build_tile_grid:[14,1,1,""],build_tracker:[14,1,1,""]},"cedar.config.core":{Config:[15,2,1,""]},"cedar.config.core.Config":{SCHEMA:[15,3,1,""],from_template:[15,4,1,""],from_yaml:[15,4,1,""],get_gcs_store:[15,4,1,""],get_gdrive_store:[15,4,1,""],get_tile_grid:[15,4,1,""],get_tracker:[15,4,1,""],to_yaml:[15,4,1,""],validate:[15,4,1,""]},"cedar.config.parse":{get_default_schema:[16,1,1,""],validate_with_defaults:[16,1,1,""]},"cedar.defaults":{PREARD_CHUNKS:[17,5,1,""],PREARD_FREQ:[17,5,1,""],PREARD_NAME:[17,5,1,""],PREARD_PREFIX:[17,5,1,""],PREARD_TRACKING:[17,5,1,""],PREARD_TRACKING_PREFIX:[17,5,1,""]},"cedar.exceptions":{EmptyCollectionError:[18,6,1,""],EmptyOrderError:[18,6,1,""]},"cedar.ordering":{Order:[19,2,1,""],get_order_metadata:[19,1,1,""],get_program_metadata:[19,1,1,""],get_task_metadata:[19,1,1,""],get_tracking_metadata:[19,1,1,""],submit_preard_task:[19,1,1,""],tile_export_image_kwds:[19,1,1,""]},"cedar.ordering.Order":{add:[19,4,1,""],collections:[19,4,1,""],create_submission:[19,4,1,""],submit:[19,4,1,""],tiles:[19,4,1,""]},"cedar.preard":{ard_netcdf_encoding:[20,1,1,""],find_preard:[20,1,1,""],preard_to_ard:[20,1,1,""],process_preard:[20,1,1,""],read_metadata:[20,1,1,""],read_preard:[20,1,1,""]},"cedar.sensors":{CREATE_ARD_COLLECTION:[21,5,1,""],common:[22,0,0,"-"],landsat:[23,0,0,"-"]},"cedar.sensors.common":{collection_metadata:[22,1,1,""],filter_collection_tile:[22,1,1,""],filter_collection_time:[22,1,1,""],get_collection_dates:[22,1,1,""],get_collection_uniq_dates:[22,1,1,""],object_metadata:[22,1,1,""],tile_geom:[22,1,1,""]},"cedar.sensors.landsat":{NODATA:[23,5,1,""],create_ard:[23,1,1,""]},"cedar.stores":{gcs:[25,0,0,"-"],gdrive:[26,0,0,"-"]},"cedar.stores.gcs":{GCSStore:[45,2,1,""],build_gcs_client:[37,1,1,""],delete_blob:[25,1,1,""],download_blob:[25,1,1,""],exists:[25,1,1,""],list_blobs:[25,1,1,""],list_dirs:[25,1,1,""],mkdir:[25,1,1,""],mkdir_p:[25,1,1,""],read_json:[25,1,1,""],upload_json:[25,1,1,""]},"cedar.stores.gcs.GCSStore":{from_credentials:[45,4,1,""],list:[45,4,1,""],read_metadata:[45,4,1,""],remove:[45,4,1,""],retrieve_image:[45,4,1,""],retrieve_metadata:[45,4,1,""],store_image:[45,4,1,""],store_metadata:[45,4,1,""]},"cedar.stores.gdrive":{"delete":[26,1,1,""],GDriveStore:[45,2,1,""],build_gdrive_service:[37,1,1,""],download_file:[26,1,1,""],download_file_id:[26,1,1,""],exists:[26,1,1,""],find_credentials:[26,1,1,""],get_appProperties:[26,1,1,""],get_credentials:[37,1,1,""],list_dirs:[26,1,1,""],list_objects:[26,1,1,""],load_credentials:[26,1,1,""],mkdir:[26,1,1,""],mkdir_p:[26,1,1,""],query_appProperties:[26,1,1,""],read_json:[26,1,1,""],save_credentials:[26,1,1,""],upload_json:[26,1,1,""]},"cedar.stores.gdrive.GDriveStore":{from_credentials:[45,4,1,""],list:[45,4,1,""],read_metadata:[45,4,1,""],remove:[45,4,1,""],retrieve_image:[45,4,1,""],retrieve_metadata:[45,4,1,""],store_image:[45,4,1,""],store_metadata:[45,4,1,""]},"cedar.tests":{importorskip:[27,1,1,""],loose_version:[27,1,1,""],test_cedar:[28,0,0,"-"],test_tracking:[29,0,0,"-"]},"cedar.tests.test_cedar":{test_package:[28,1,1,""]},"cedar.tracking":{Tracker:[30,2,1,""],clean_tracked:[30,1,1,""],download_tracked:[30,1,1,""],get_ee_tasks:[30,1,1,""],get_submission_info:[30,1,1,""],update_tracking_info:[30,1,1,""]},"cedar.tracking.Tracker":{clean:[30,4,1,""],download:[30,4,1,""],filters:[30,4,1,""],list:[30,4,1,""],read:[30,4,1,""],submit:[30,4,1,""],update:[30,4,1,""]},"cedar.utils":{affine_to_str:[31,1,1,""],get_file:[31,1,1,""],load_ee:[31,1,1,""],set_file_urw:[31,1,1,""]},cedar:{cli:[2,0,0,"-"],config:[13,0,0,"-"],defaults:[17,0,0,"-"],exceptions:[18,0,0,"-"],ordering:[19,0,0,"-"],preard:[20,0,0,"-"],sensors:[21,0,0,"-"],stores:[24,0,0,"-"],tests:[27,0,0,"-"],tracking:[30,0,0,"-"],utils:[31,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","function","Python function"],"2":["py","class","Python class"],"3":["py","attribute","Python attribute"],"4":["py","method","Python method"],"5":["py","data","Python data"],"6":["py","exception","Python exception"]},objtypes:{"0":"py:module","1":"py:function","2":"py:class","3":"py:attribute","4":"py:method","5":"py:data","6":"py:exception"},terms:{"01_2017":47,"01t00":47,"03d":[17,30,47],"13t18":47,"1YS":17,"1f9ztkqoo9bz_no4vw6vslmsreoaeja1b":47,"4gb":46,"5YS":47,"boolean":15,"case":[35,44],"class":[15,19,25,26,30,45],"default":[1,9,15,16,20,26,32,34,37,45],"enum":15,"export":[10,17,19,25,26,34,35,44,45,46],"function":[15,21,22,23,30,31,44,46],"import":[31,43],"int":30,"long":37,"new":[26,38,40,46,47],"public":43,"return":[6,9,14,15,19,20,22,23,25,26,30,31,37,45],"true":[9,25,26,30,31,37,45],"try":[9,18,30,31],"while":35,Added:41,CRS:35,For:[35,37,41,43,44],GCS:[15,19,25,26,30,34,35,37,45],IDs:30,NOT:37,ONE:37,One:35,THE:37,The:[14,34,35,37,38,43,44,45],There:[43,44],These:44,Use:[30,34],Used:34,Using:[37,46],WRS:44,With:43,_task:[17,30],_templat:35,abc:15,abl:44,about:[19,20,26,30,34,37,44,46,47],access:26,accomplish:44,accord:20,accordingli:45,account:[15,25,34,35,37,44],accur:34,acquir:42,acquisit:[44,46],activ:43,actual:37,adam:44,add:[19,37],adding:38,addit:[15,19,23,25,26,45],addlhelp:25,address:34,affect:43,affin:[31,43],affine_to_str:31,affix:35,after:[30,44,47],against:[15,19,34,38],alber:35,all:[14,20,23,30,31,34,41,43],allow:[26,35,37,44],alreadi:[25,26],also:[26,35,37,43,44],altern:43,america:35,amount:44,analysi:[42,44,45],ani:43,anoth:35,api:[25,26,31,34,42,43,44,45],apidoc:38,appear:[41,44],appli:[23,30,35],applic:[26,37,42,44,45],appmod:43,appproperti:26,archiv:44,ard:[6,12,15,17,18,19,20,21,23,25,26,30,34,42,43,44,45],ard_d:20,ard_netcdf_encod:20,area:35,arg:[9,34],argument:[15,25,26,30,45],arrai:15,ask:42,assum:[25,45],asterisk:26,australian:44,auth:[1,2,35,37,43],authent:[15,26,31,34,37,44],author:37,avail:[9,35],back:37,backend:[19,35],bad:31,badparamet:9,band:[17,20,46],bar:30,base:[15,18,19,25,26,30,34,38,42],basic:44,batch:[19,25,26,30,45],becaus:[31,44],been:[34,42,47],befor:[26,35,43],being:44,below:[35,46],ben:44,between:41,bibtex:43,bill:44,blob:[25,45],bool:[9,23,25,26,30,31,37],both:45,brian:44,browser:[26,34,37],bucket:[15,25,35,45],bucket_nam:[15,25,35,45],build:[1,13,26,38],build_gcs_client:[25,37],build_gdrive_servic:[26,37],build_tile_grid:14,build_track:14,built:[34,43],c01:[21,23,47],call:37,callabl:30,callback:30,calli:44,can:[20,25,30,34,35,37,38,42,43,45,47],cannot:31,cap:44,capabl:43,categor:41,caus:31,cedar:[35,37,38,43,44,45,46,47],cedar_preard:[17,30,47],cedar_track:[17,30,47],ceholden:43,ceo:44,chang:[37,42,43],changelog:35,charg:44,cheap:44,check:[7,10,23,25,26,30,31,34,47],choic:[34,37,44],chunk:[15,17,20],chunksiz:35,classmethod:[15,19,25,26,45],clean:[30,42],clean_track:30,clear:34,cli:[1,32,34],click:[9,34,41,43],client:[15,23,25,26,34,35,37,43,45],client_secret:[26,37,45],client_secrets_fil:[15,26,34,35,37,45],cligj:43,clip:[19,44],clone:43,cloud:[25,34,35,44],code:[37,38],col:[22,34],collect:[15,17,19,21,22,23,30,35,44,46,47],collection_metadata:22,column:[30,35],com:[25,35,37,41,43,47],combin:44,command:[8,35,37,38,42],comment:34,commerci:44,common:[1,21,31,44],commun:23,compar:44,comparison:41,complet:47,compon:26,compress:35,comput:[25,26,35,44,45],conda:43,config:[1,2,9,32,35,37],config_fil:34,configur:[4,9,14,15,16,34,37,42,44,46],conic:35,conjunct:34,consid:[25,37,44],consider:44,consist:[44,46],consol:[1,2,34],contain:[15,20,26],content:[25,32],context:[9,19],continu:43,control:34,conveni:35,convers:[42,44],convert:[1,2,20,35,40,46],coordin:[15,35],copi:43,core:[1,13,43],correspond:[25,26,31,45],cost:[23,44],count:34,cov:[38,43],coverag:[38,43],creat:[6,14,15,18,19,21,23,25,26,34,35,37,43,44,45,46],create_ard:[21,23],create_ard_collect:21,create_dest_dir:6,create_submiss:19,creation:[34,44,45],creation_timestamp_m:47,credenti:[15,25,26,34,35,42,45],credentials_fil:[15,26,34,35,37,45],crs:[15,19,25,26,35,45],crs_transform:19,ctx:9,cube:[6,34,44],current:[30,44],custom:14,d_end:22,d_start:22,dask:[34,42,43],data:[6,9,11,15,19,20,23,25,26,30,34,35,37,40,44,45,46],dataarrai:20,datacub:43,dataset:20,date:[30,34,35,46],date_end:[17,19,23,30,35,47],date_format:34,date_rang:30,date_start:[17,19,23,30,35,47],datetim:[23,30],david:44,deal:[22,23],dec:17,decod:25,definit:[14,15,40,46],degre:35,delet:[25,26,30,34,44],delete_blob:25,depend:35,describ:[15,30,34,35,37],descript:[15,35],design:42,dest:[15,25,26,30,34,45],dest_dir_templ:6,destin:[15,25,26,30,34,35,44,45],detail:[35,38],develop:[35,42],dict:[9,14,17,19,20,21,22,23,25,26,30,45],dictionari:[22,30],differ:35,difficult:43,dimens:[19,35],dimension:42,directli:43,directori:[20,25,26,30,34,35,37,43,45],disabl:[26,37],discoveri:[26,37,45],disk:[20,31],distribut:[34,42,43],dixon:44,doc:[25,35,37],docstr:38,doe:[26,44],don:[25,26,34],download:[11,25,26,30,37,42,43,44],download_blob:25,download_fil:26,download_file_id:26,download_track:30,downoad:30,draft:15,drive:[19,26,34,35,44,47],dump:[25,26],dure:[46,47],dwyer:44,each:[20,22,30,35,46,47],earth:[19,25,26,30,31,34,35,44,45,47],earthengin:[22,35,43],easi:37,easiest:[37,43],ecosystem:42,edit:43,ee_except:31,eeexcept:31,effort:44,egress:44,either:[14,15,25,26,30,34,37,43,45],els:37,emb:35,empti:[18,26],emptycollectionerror:18,emptyordererror:18,enabl:[37,43,44],encod:[15,20,25,26,35],encoding_kwd:20,end:[23,30,34],engin:[19,25,26,30,31,34,35,44,45,47],enough:44,ensur:45,enter:[34,37],entir:44,entrypoint:34,env:43,envirn:[25,37],environ:[37,43,44],equal:35,error:[9,31],etc:[30,35,44],evalu:22,evan:44,everyon:44,exampl:[35,38],excel:44,except:[1,9,31,32],execut:30,executor:34,exist:[25,26,30,31,34],exit:34,explicitli:37,export_image_kwd:[15,19,25,26,30,35,45],extens:38,facilit:44,fail_if_miss:9,fake:25,fals:[15,19,23,25,26,30],favor:[26,37],featur:34,fetch:9,fetch_config:9,fetch_param:9,file:[4,14,15,16,20,25,26,30,31,34,35,37,38,43,44,45,46],file_id:26,filedimens:15,fileexistserror:26,filenam:[14,15,20,25,26,30,31,35,37,45],fill:16,filter:[15,19,23,25,30,35],filter_collection_til:22,filter_collection_tim:22,find:44,find_credenti:26,find_preard:20,first:[25,26,31,44],fit:45,fix:41,fixtur:[38,43],flag:43,folder:[25,26,35,45,47],follow:[37,38,41,43],format:[6,20,34,35,40,44,46],foundat:44,free:44,frequenc:[17,34],frequent:42,from:[9,14,15,18,20,22,23,25,26,30,34,35,37,42,44,45,46],from_credenti:[25,26,45],from_templ:15,from_yaml:15,full:38,fulli:[40,46],further:44,futur:[26,37,45],gcs:[1,15,24,30,37,45],gcsstore:[15,19,25,30,45],gd9ce32:47,gdrive:[1,15,24,30,37,45],gdrivestor:[15,19,26,30,45],gee:[1,2,12,14,21,22,23,25,26,30,42,44,45],gener:[19,30,34,38,44],geoscienc:44,geospati:[42,44],geotiff:[20,34,35,46],get:[15,19,26,34,37,42],get_appproperti:26,get_collection_d:22,get_collection_uniq_d:22,get_credenti:[26,37],get_default_schema:16,get_ee_task:30,get_fil:31,get_gcs_stor:15,get_gdrive_stor:15,get_order_metadata:19,get_program_metadata:19,get_submission_info:30,get_task_metadata:19,get_tile_grid:15,get_track:15,get_tracking_metadata:19,getinfo:23,gis:[14,15,19,23,30],git:43,github:[41,43],give:37,given:[26,35,44,46],glob:25,global:35,goal:35,going:37,good:[31,44],googl:[19,25,26,34,35,42,44,47],google_application_credenti:[25,37],googleapicli:[26,37,45],gorelick:44,gregori:44,grid:[14,15,19,23,30,35,46],grid_filenam:[14,15],grid_nam:[14,15],group:[8,34],gsutil:25,guid:[37,38,42],hancher:44,handl:[9,15,31],hankui:44,has:[37,42,44,47],have:[34,35,43,44,45,47],haven:31,help:[34,37,42],helper:[25,26],high:44,hint:[25,26,45],hook:44,horizont:[17,30,35,47],how:[35,38,46],howev:44,howsubdirectorieswork:25,html:35,http:[15,25,35,37,47],httplib2:43,ic_filt:35,identifi:30,identitif:19,ilyushchenko:44,imag:[17,18,19,20,22,23,25,26,30,34,35,44,45,46,47],image_collect:34,image_metadata:19,imagecollect:[22,35],imageri:[20,30,35,45],imgcol:22,importerror:31,importorskip:27,includ:[15,19,26,35,37,43,46],incur:44,incurr:44,indent:15,index:[0,34],info:[19,26,30,34,35,47],inform:[19,20,30,34,35,37,41,44,45,46,47],initi:[14,31],input:[20,30],insid:[20,25,37],instal:42,instead:[25,26,34,35],institut:44,instruct:37,integ:[15,34],integr:43,interact:[5,34,37],interfac:[35,37,42],interpet:30,isn:9,issu:15,item:[15,22,30,35],its:[9,26,35,37],jan:17,jenkerson:44,jeremi:44,job:34,john:44,join:20,joshua:44,json:[15,20,25,26,30,34,35,37,45,47],keep:[34,46],keepachangelog:41,kei:[22,26,30,35],keyword:[14,15,19,25,26,35,45],know:37,known:[30,35],kwd:[9,14,15],landsat:[1,21,42,44,47],landsat_lc08_c01_t1_sr_h064v032_2012:47,languag:35,larg:44,later:[43,44],lazi:[30,38,43],lc08:[21,23,47],le07:[21,23,47],learn:[38,44],left:[15,35],leo:44,leslei:44,lesson:44,level:44,lewi:44,librari:[25,37,42,43],like:[34,35,44,45],limit:[15,34,35],line:[35,37,38,42],list:[20,22,25,26,30,45],list_blob:25,list_dir:[25,26],list_object:26,list_track:30,load:[15,25,26,37,45],load_credenti:26,load_e:31,load_grid:14,loadabl:14,local:[25,34],locat:[20,26,35,37,43,45,46,47],log:[34,37,42],login:[34,35],look:30,loose_vers:27,lose:44,lt05:[21,23,47],lymburn:44,mai:[35,43,44],main:[1,2,34,44],major:35,make:[25,26,30,37,38,43,44],mani:[35,44],map:[15,21,30,35],massiv:44,match:[20,30],matt:44,maximum:35,maxitem:15,mean:[43,44],measur:38,meet:[40,46],memori:20,messag:34,metadata:[6,19,20,22,23,25,26,30,34,35,44,45,46,47],metadata_pattern:20,meter:44,mexico:35,might:[25,35,37,38],mike:44,minimum:[35,44],minitem:15,minvers:27,miss:9,mkdir:[25,26],mkdir_p:[25,26],modifi:[16,31,34,35],modul:[0,32,38],month:44,moor:44,more:[30,35,37],move:37,much:44,mueller:44,multipl:46,must:34,n_imag:30,n_step:30,name:[9,14,15,17,19,20,23,25,26,27,30,34,35,37,45,46,47],name_templ:[15,19,30,35,47],napoleon:38,narrow:26,ndarrai:20,necessari:14,need:[26,35,37,40,43,44,46],netcdf4:[20,34,35,42,44],netcdf:[20,34,35],no_brows:[26,37],nodata:23,nodatavalu:23,noel:44,non:[25,44],none:[9,14,15,16,19,20,23,25,26,27,30,31,34,37,45],norman:44,north:[35,44],notabl:41,note:[25,37,42],now:[35,43],number:[15,20,23,30,35,41,44],numpi:[38,43],numpydoc:43,oauth2:[15,26,34,35,37],oauth:37,oauthlib:43,obj:[16,22],object:[14,15,19,22,25,26,30,31,45],object_metadata:22,observ:[20,23],off:30,oliv:44,onc:43,one:[23,30,38,43],oneof:15,onli:[31,34,44],onto:[19,25,26,45],open:[5,17,20,26,34,37],option:[1,2,14,19,20,23,25,26,30,31,34,35,37,45],order:[1,12,18,30,32,34,35,37,42,44,45],order_info:19,org:[15,35],organ:44,other:[15,30,31,37,44],otherwis:[9,14,25,26,30,34,43,45],our:[37,38,43],out:34,output:[38,47],output_url:47,over:[23,44],overlap:44,overrid:34,overview:42,overwrit:[25,26,30,34,45],own:35,packag:[32,37,38,43,44],page:0,paid:44,pair:[20,30],panda:[30,43],parallel:[34,42],paramet:[9,14,15,19,20,22,23,25,26,30,31,37,45],parametr:35,parent:[9,25,26,45],parent_id:26,pars:[1,13,25,26,38,45],part:[25,34,45],pass:[14,15,19,25,26,31,45],past:[30,37],path:[14,15,17,19,20,25,26,30,31,34,37,44,45],pathlib:[14,25,26,30,45],pattern:[25,26,30,35,45],patternproperti:15,per:[22,23],perform:23,period:[23,30,34,46],period_end:[30,34,35,47],period_freq:[30,34,35,47],period_start:[30,34,35,47],permiss:37,phase:46,pick:37,piec:[25,26,45,46],pile:43,pip:43,pixel:35,planetari:44,platform:[25,37],pleas:37,plugin:[38,43],point:[35,37,44],popular:44,port:34,possibl:42,pre:[6,12,17,18,19,20,25,26,30,34,35,42,44,45],preard:[1,32,34],preard_chunk:17,preard_freq:17,preard_nam:17,preard_prefix:17,preard_to_ard:20,preard_track:17,preard_tracking_prefix:17,prefix:[17,19,25,26,35,45,47],prefix_templ:[15,19,30,35,47],preproces:[40,46],preprocess:[42,44],present:44,preserv:34,previous:30,primarili:42,privat:[26,37],probabl:37,proceed:43,process:[19,20,30,34,35,38,42,44,45,47],process_preard:20,program:[19,35,37,42,47],progress:30,progressbar:34,project:[15,25,34,35,37,44,45],prompt:[26,37],properti:[15,19,30],provid:[15,26,30,34,35,37,45],pure:43,put:[26,37,38],py37:43,pydata:35,pypi:43,pytest:[38,43],python:[5,35,37,42,43],pyyaml:43,queri:26,query_appproperti:26,question:42,quickli:42,quiet:34,quota:44,raevksi:44,rais:[9,15,18,20,26,31],rang:[30,35],rapidli:44,rasterio:[42,43],rather:44,read:[20,25,26,30,31,37,45],read_json:[25,26],read_metadata:[20,25,26,45],read_preard:20,readi:[43,44,45],realli:25,reason:44,rebecca:44,recommend:43,recurs:[25,26],ref:15,refer:[15,25,37,42],reflect:[43,44],refresh:30,registr:45,relat:43,releas:41,reli:38,rememb:37,remot:[19,44],remov:[25,26,41,44,45],renam:37,repo:43,report:[30,38],repositori:43,representatin:31,reproject:[19,44],requir:[15,23,31,37,44],res:[15,35],resolut:35,resourc:[26,37,44,45],rest:35,retriev:[22,25,26,45],retrieve_imag:[25,26,45],retrieve_metadata:[25,26,45],reupload:30,rob:44,roi:44,root:26,row:[30,34,35,44],run:[23,30,38,43,44],runner:38,same:[38,45],satellit:[42,44],sauer:44,save:[25,26,34,37,42,45],save_credenti:26,scale:[25,26,44,45],scene:44,schedul:34,schema:[15,16],scikit:38,scratch:35,search:[0,25,26,30,45],secret:[15,26,34,35],section:[14,37,47],see:[25,26,35,38,41,43],self:[15,19,25,26,30,45],sens:44,sensor:[1,32,44,46],separ:35,sequenc:[20,22,23,25,26,30,31,45],seri:44,server:23,servic:[15,25,26,34,35,37,44,45],service_account:37,service_account_fil:[34,37],set:[18,25,31,35,37,44,46],set_file_urw:31,setting_up_authent:[25,37],setup:37,shardsiz:15,share:37,should:[14,30,34,35,38,43],show:34,shown:38,sign:37,silenc:34,simon:44,sinc:35,singl:[19,20],sit:43,sixsmith:44,size:[15,35],some:[20,22,30,34,35,44],someth:37,sort_kei:15,sourc:[6,9,14,15,16,18,19,20,22,23,25,26,27,28,30,31,37,38,45],south:44,specif:[21,26,30,34,35,44,46,47],specifi:[14,20,30,34,37],speed:23,sphinx:[38,43],sphinx_rtd_them:43,sphinxcontrib:43,split:[20,34],ssh:43,stabl:35,start:[19,23,30,34,35,42],start_timestamp_m:47,state:47,statist:38,statu:[1,2,19,30],stem:[14,15,19,23,30],step:[37,43,44],still:37,storag:[1,2,19,25,34,35,42,44,46],store:[1,14,15,19,30,32,35,37,44,45,46],store_imag:[19,25,26,45],store_metadata:[25,26,45],str:[6,14,15,17,19,20,22,23,25,26,30,31,37,45],string:[15,25,26,31,34,35,37],style:[38,41],style_debug:9,style_error:9,style_info:9,style_warn:9,subdataset:20,submiss:[19,21,23,30,34,42,44,47],submission_info:19,submit:[1,2,18,19,30,47],submit_preard_task:19,submodul:32,subpackag:32,subset:30,suit:[35,44],suitabl:44,summar:34,summari:38,support:44,sure:[37,43],surfac:44,sync:34,system:[15,46],t1_sr:[21,23,47],tabl:35,take:[30,46],taken:30,task:[7,10,17,19,25,26,30,44,45,47],tell:43,templat:[6,15,17,35],term:38,termin:[5,26,34,37,38],terrabyt:44,test:[1,32,34,37],test_cedar:[1,27],test_packag:28,test_track:[1,27],text:[34,35],than:44,thau:44,thei:31,them:37,thi:[15,19,25,26,30,34,35,37,38,41,43,44,45,46,47],thread:34,through:45,throughout:45,ties:37,tile:[14,15,17,19,22,23,30,35,44,46,47],tile_export_image_kwd:19,tile_geom:22,tile_grid:[14,15,30,47],tile_indic:[30,35,47],tilegrid:[14,15,23,30,34],time:[20,34,44,46],timestamp:[35,45,47],titl:15,to_netcdf:20,to_yaml:15,tocloudstorag:[15,25,26,35,45],todai:[17,30],todo:[33,34,36,39],todriv:[35,45],togeth:20,token:[26,37],tool:[4,12,21,42,43,44],toolz:43,top:43,track:[1,17,19,29,32,34,35,42,44,45],tracker:[14,15,30],tracking_2019:47,tracking_id:19,tracking_info:30,tracking_nam:[19,30,34],tracking_period:[17,30],tracking_prefix:[19,30,35],tracking_templ:[15,30,35],transform:31,trash:26,travi:38,tupl:30,two:[35,37,46],type:[9,14,15,17,19,20,21,22,23,25,26,30,31,35,37,45],typic:[22,25,31,37],unit:38,unless:47,unlimit:44,untag:47,updat:[25,26,30,38],update_timestamp_m:47,update_tracking_info:30,upload:[25,26,45],upload_json:[25,26],upper:[15,35],url:[37,41],usag:[34,35,44],use:[14,15,17,19,20,25,26,30,34,35,37,38,43,44,45,46,47],used:[30,34,38],useful:[35,44],user:[15,26,31,35,42,44,45],uses:46,using:[14,25,26,34,35,37,38,43,44,45],usual:[44,46],utf:[25,26],util:[1,25,26,27,32],v3zzjupnep5ph3npi2w6w23i:47,valid:[15,16,23,34],validate_with_default:16,validationerror:15,valu:[15,17,30,46],valueerror:[18,20,26],variabl:[25,37],variou:34,verbos:34,veri:34,version:[19,34,41,47],vertic:[17,30,35,47],visit:37,vstring:27,wai:43,wait:23,want:[35,37,46],web:[26,34,37],well:35,whatev:37,when:[17,18,20,26,37,38,43],where:44,which:[37,38,44],wide:34,within:[23,25,26,42,45,47],without:[35,44],wkt:15,woodcock:44,work:[4,35,37,42],worker:34,would:43,wrap:30,write:[15,31,35,37],written:[15,20,25,26,47],wyborn:44,xarr:20,xarrai:[20,35,38,42,43],yaml:15,year:17,yet:[31,43],yield:[25,26,30,45],yml:43,you:[25,31,34,35,37,43,44,46,47],your:[25,34,35,37,46],zhang:44,zlib:15},titles:["API Reference","cedar package","cedar.cli package","cedar.cli.auth module","cedar.cli.config module","cedar.cli.console module","cedar.cli.convert module","cedar.cli.gee module","cedar.cli.main module","cedar.cli.options module","cedar.cli.status module","cedar.cli.storage module","cedar.cli.submit module","cedar.config package","cedar.config.build module","cedar.config.core module","cedar.config.parse module","cedar.defaults module","cedar.exceptions module","cedar.ordering module","cedar.preard module","cedar.sensors package","cedar.sensors.common module","cedar.sensors.landsat module","cedar.stores package","cedar.stores.gcs module","cedar.stores.gdrive module","cedar.tests package","cedar.tests.test_cedar module","cedar.tests.test_tracking module","cedar.tracking module","cedar.utils module","cedar","Cleaning \u201cpre-ARD\u201d from Storage","Command Line Interface Programs","Configuration","Pre-ARD to ARD Conversion","Credentials","Developer Notes","Download","Frequently Asked Questions","Change Log","<code class=\"docutils literal notranslate\"><span class=\"pre\">cedar</span></code> - Create Earth engine Data cubes of Analytical Readiness","Installation","Overview","Storage","\u201cPre-ARD\u201d Order Submission","Pre-ARD Order Tracking"],titleterms:{"default":17,access:37,analyt:42,api:[0,37,38],ard:[33,35,36,40,46,47],ask:40,auth:[3,34],build:14,cedar:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,34,42],chang:41,clean:[33,34],cli:[2,3,4,5,6,7,8,9,10,11,12],cloud:[37,45],command:[34,43],common:22,config:[4,13,14,15,16,34],configur:35,consol:5,content:[1,2,13,21,24,27],continu:38,convers:36,convert:[6,34],core:15,creat:42,credenti:37,cube:42,data:42,depend:43,detail:47,develop:[37,38],doc:38,document:[38,43],download:[34,39],drive:[37,45],earth:[37,42,43],engin:[37,42,43],except:18,frequent:40,from:[33,43],gcs:[25,34,35],gdrive:[26,34,35],gee:[7,34,43],gener:35,googl:[37,43,45],html:38,instal:43,instruct:43,integr:38,interfac:[34,43],landsat:23,limit:44,line:[34,43],list:[34,47],log:41,main:8,modul:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],note:38,option:[9,43],order:[19,46,47],overview:[44,46],packag:[1,2,13,21,24,27],pars:16,pre:[33,36,40,46,47],preard:20,print:34,program:34,question:40,read:[34,47],readi:42,refer:[0,44],releas:43,requir:43,section:35,sensor:[21,22,23],sourc:43,stabl:43,statu:[10,34,47],storag:[11,33,37,45],store:[24,25,26],submiss:46,submit:[12,34],submodul:[1,2,13,21,24,27],subpackag:1,task:34,templat:34,test:[27,28,29,38,43],test_cedar:28,test_track:29,tile_grid:35,track:[30,47],tracker:35,updat:[34,47],user:37,util:31,what:40}})