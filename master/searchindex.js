Search.setIndex({docnames:["api","cedar/cedar","cedar/cedar.cli","cedar/cedar.cli.auth","cedar/cedar.cli.config","cedar/cedar.cli.console","cedar/cedar.cli.convert","cedar/cedar.cli.main","cedar/cedar.cli.options","cedar/cedar.cli.status","cedar/cedar.cli.storage","cedar/cedar.cli.submit","cedar/cedar.config","cedar/cedar.config.build","cedar/cedar.config.core","cedar/cedar.config.parse","cedar/cedar.defaults","cedar/cedar.exceptions","cedar/cedar.ordering","cedar/cedar.preard","cedar/cedar.sensors","cedar/cedar.sensors.common","cedar/cedar.sensors.landsat","cedar/cedar.stores","cedar/cedar.stores.gcs","cedar/cedar.stores.gdrive","cedar/cedar.tests","cedar/cedar.tests.test_cedar","cedar/cedar.tests.test_tracking","cedar/cedar.tracking","cedar/cedar.utils","cedar/modules","config","convert","credentials","dev","download","faq","history","index","install","overview","storage","submissions"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,"sphinx.ext.intersphinx":1,"sphinx.ext.todo":1,"sphinx.ext.viewcode":1,sphinx:56},filenames:["api.rst","cedar/cedar.rst","cedar/cedar.cli.rst","cedar/cedar.cli.auth.rst","cedar/cedar.cli.config.rst","cedar/cedar.cli.console.rst","cedar/cedar.cli.convert.rst","cedar/cedar.cli.main.rst","cedar/cedar.cli.options.rst","cedar/cedar.cli.status.rst","cedar/cedar.cli.storage.rst","cedar/cedar.cli.submit.rst","cedar/cedar.config.rst","cedar/cedar.config.build.rst","cedar/cedar.config.core.rst","cedar/cedar.config.parse.rst","cedar/cedar.defaults.rst","cedar/cedar.exceptions.rst","cedar/cedar.ordering.rst","cedar/cedar.preard.rst","cedar/cedar.sensors.rst","cedar/cedar.sensors.common.rst","cedar/cedar.sensors.landsat.rst","cedar/cedar.stores.rst","cedar/cedar.stores.gcs.rst","cedar/cedar.stores.gdrive.rst","cedar/cedar.tests.rst","cedar/cedar.tests.test_cedar.rst","cedar/cedar.tests.test_tracking.rst","cedar/cedar.tracking.rst","cedar/cedar.utils.rst","cedar/modules.rst","config.rst","convert.rst","credentials.rst","dev.rst","download.rst","faq.rst","history.rst","index.rst","install.rst","overview.rst","storage.rst","submissions.rst"],objects:{"":{cedar:[1,0,0,"-"]},"cedar.cli":{auth:[3,0,0,"-"],config:[4,0,0,"-"],console:[5,0,0,"-"],convert:[6,0,0,"-"],main:[7,0,0,"-"],options:[8,0,0,"-"],status:[9,0,0,"-"],storage:[10,0,0,"-"],submit:[11,0,0,"-"]},"cedar.cli.options":{STYLE_DEBUG:[8,1,1,""],STYLE_ERROR:[8,1,1,""],STYLE_INFO:[8,1,1,""],STYLE_WARNING:[8,1,1,""],fetch_config:[8,1,1,""],fetch_param:[8,1,1,""]},"cedar.config":{build:[13,0,0,"-"],core:[14,0,0,"-"],parse:[15,0,0,"-"]},"cedar.config.build":{build_tile_grid:[13,1,1,""],build_tracker:[13,1,1,""]},"cedar.config.core":{Config:[14,2,1,""]},"cedar.config.core.Config":{SCHEMA:[14,3,1,""],as_parsed:[14,4,1,""],config:[14,4,1,""],from_template:[14,4,1,""],from_yaml:[14,4,1,""],get_gcs_store:[14,4,1,""],get_gdrive_store:[14,4,1,""],get_tile_grid:[14,4,1,""],get_tracker:[14,4,1,""],to_yaml:[14,4,1,""],validate:[14,4,1,""]},"cedar.config.parse":{get_default_schema:[15,1,1,""],validate_with_defaults:[15,1,1,""]},"cedar.defaults":{PREARD_CHUNKS:[16,5,1,""],PREARD_FREQ:[16,5,1,""],PREARD_NAME:[16,5,1,""],PREARD_PREFIX:[16,5,1,""],PREARD_TRACKING:[16,5,1,""],PREARD_TRACKING_PREFIX:[16,5,1,""]},"cedar.exceptions":{EmptyCollectionError:[17,6,1,""]},"cedar.ordering":{Order:[18,2,1,""],get_order_metadata:[18,1,1,""],get_program_metadata:[18,1,1,""],get_task_metadata:[18,1,1,""],get_tracking_metadata:[18,1,1,""],submit_preard_task:[18,1,1,""]},"cedar.ordering.Order":{add:[18,4,1,""],collections:[18,4,1,""],create_submission:[18,4,1,""],submit:[18,4,1,""],tiles:[18,4,1,""]},"cedar.preard":{ard_netcdf_encoding:[19,1,1,""],find_preard:[19,1,1,""],preard_to_ard:[19,1,1,""],process_preard:[19,1,1,""],read_metadata:[19,1,1,""],read_preard:[19,1,1,""]},"cedar.sensors":{CREATE_ARD_COLLECTION:[20,5,1,""],common:[21,0,0,"-"],landsat:[22,0,0,"-"]},"cedar.sensors.common":{collection_metadata:[21,1,1,""],filter_collection_tile:[21,1,1,""],filter_collection_time:[21,1,1,""],get_collection_dates:[21,1,1,""],get_collection_uniq_dates:[21,1,1,""],object_metadata:[21,1,1,""],tile_geom:[21,1,1,""]},"cedar.sensors.landsat":{NODATA:[22,5,1,""],create_ard:[22,1,1,""]},"cedar.stores":{gcs:[24,0,0,"-"],gdrive:[25,0,0,"-"]},"cedar.stores.gcs":{GCSStore:[42,2,1,""],build_gcs_client:[34,1,1,""],delete_blob:[24,1,1,""],download_blob:[24,1,1,""],exists:[24,1,1,""],list_blobs:[24,1,1,""],list_dirs:[24,1,1,""],mkdir:[24,1,1,""],mkdir_p:[24,1,1,""],read_json:[24,1,1,""],upload_json:[24,1,1,""]},"cedar.stores.gcs.GCSStore":{from_credentials:[42,4,1,""],list:[42,4,1,""],read_metadata:[42,4,1,""],remove:[42,4,1,""],retrieve_image:[42,4,1,""],retrieve_metadata:[42,4,1,""],store_image:[42,4,1,""],store_metadata:[42,4,1,""]},"cedar.stores.gdrive":{"delete":[25,1,1,""],GDriveStore:[42,2,1,""],build_gdrive_service:[34,1,1,""],download_file:[25,1,1,""],download_file_id:[25,1,1,""],exists:[25,1,1,""],find_credentials:[25,1,1,""],get_appProperties:[25,1,1,""],get_credentials:[34,1,1,""],list_dirs:[25,1,1,""],list_objects:[25,1,1,""],load_credentials:[25,1,1,""],mkdir:[25,1,1,""],mkdir_p:[25,1,1,""],query_appProperties:[25,1,1,""],read_json:[25,1,1,""],save_credentials:[25,1,1,""],upload_json:[25,1,1,""]},"cedar.stores.gdrive.GDriveStore":{from_credentials:[42,4,1,""],list:[42,4,1,""],read_metadata:[42,4,1,""],remove:[42,4,1,""],retrieve_image:[42,4,1,""],retrieve_metadata:[42,4,1,""],store_image:[42,4,1,""],store_metadata:[42,4,1,""]},"cedar.tests":{importorskip:[26,1,1,""],loose_version:[26,1,1,""],test_cedar:[27,0,0,"-"],test_tracking:[28,0,0,"-"]},"cedar.tests.test_cedar":{test_package:[27,1,1,""]},"cedar.tracking":{GEEARDTracker:[29,2,1,""],clean_tracked:[29,1,1,""],download_tracked:[29,1,1,""],get_ee_tasks:[29,1,1,""],get_submission_info:[29,1,1,""],update_tracking_info:[29,1,1,""]},"cedar.tracking.GEEARDTracker":{clean:[29,4,1,""],download:[29,4,1,""],filters:[29,4,1,""],list:[29,4,1,""],read:[29,4,1,""],submit:[29,4,1,""],update:[29,4,1,""]},"cedar.utils":{affine_to_str:[30,1,1,""],get_file:[30,1,1,""],set_file_urw:[30,1,1,""]},cedar:{cli:[2,0,0,"-"],config:[12,0,0,"-"],defaults:[16,0,0,"-"],exceptions:[17,0,0,"-"],ordering:[18,0,0,"-"],preard:[19,0,0,"-"],sensors:[20,0,0,"-"],stores:[23,0,0,"-"],tests:[26,0,0,"-"],tracking:[29,0,0,"-"],utils:[30,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","function","Python function"],"2":["py","class","Python class"],"3":["py","attribute","Python attribute"],"4":["py","method","Python method"],"5":["py","data","Python data"],"6":["py","exception","Python exception"]},objtypes:{"0":"py:module","1":"py:function","2":"py:class","3":"py:attribute","4":"py:method","5":"py:data","6":"py:exception"},terms:{"03d":[16,29],"1YS":16,"58dc5a5490f":34,"boolean":14,"class":[14,18,24,25,29,42],"default":[1,8,14,15,19,25,31,34,42],"enum":14,"export":[9,16,24,25,42],"function":[14,20,21,22,29,30,34],"import":[34,40],"int":29,"long":34,"new":[14,25,35],"public":40,"return":[8,13,14,18,19,21,22,24,25,29,30,34,42],"true":[8,24,25,29,30,34,42],"try":[8,17,29],Added:38,For:[38,40],GCS:[14,24,25,29,42],IDs:29,NOT:34,The:[13,34,35,40,42],There:40,Use:29,Using:34,With:40,_task:[16,29],a84f66f438b:34,about:[18,19,25,29,34],access:25,accord:19,accordingli:42,account:[14,24,34],acquir:39,activ:40,actual:34,add:18,adding:35,addit:[14,22,24,25,42],addlhelp:24,affect:40,affin:[30,40],affine_to_str:30,after:29,against:[14,18,35],all:[13,19,22,29,30,38,40],allow:[25,34],alreadi:[24,25],also:[25,40],altern:40,analysi:[39,42],ani:40,api:[24,25,39,40,42],apidoc:35,appear:38,appli:[22,29],applic:[25,34,39,42],appmod:40,appproperti:25,ard:[6,11,14,16,17,18,19,20,22,24,25,29,39,40,41,42],ard_d:19,ard_netcdf_encod:19,arg:8,argument:[14,24,25,29,34,42],arrai:14,as_pars:14,ask:39,assum:[24,42],asterisk:25,auth:[1,2,34,40],authent:[14,25,34],author:34,avail:8,back:34,bad:30,badparamet:8,band:[16,19],bar:29,base:[14,17,18,24,25,29,35,39],batch:[18,24,25,29,42],been:39,befor:25,between:38,bibtex:40,blob:[24,42],bool:[8,22,24,25,29,30,34],both:[34,42],browser:[25,34],bucket:[14,24,42],bucket_nam:[14,24,42],build:[1,12,25,35],build_gcs_client:[24,34],build_gdrive_servic:[25,34],build_tile_grid:13,build_track:13,built:40,c01:[20,22],call:34,callabl:29,callback:29,can:[19,24,29,34,35,39,40,42],capabl:40,categor:38,cedar:[34,35,40,42],ceholden:40,chang:[34,39,40],check:[9,22,24,25,29,30],choic:34,chunk:[14,16,19],classmethod:[14,18,24,25,42],clean:29,clean_track:29,cli:[1,31],click:[8,38,40],client:[14,22,24,25,34,40,42],client_secret:[25,34,42],client_secrets_fil:[14,25,34,42],cligj:40,clone:40,cloud:24,code:35,col:21,collect:[16,18,20,21,22,29],collection_metadata:21,column:29,com:[24,34,38,40],command:[7,34,35],common:[1,20,30],commun:22,comparison:38,compon:25,comput:[24,25,42],conda:40,config:[1,2,8,31],configur:[4,8,13,14,15,39],consid:[24,34],consol:[1,2],contain:[14,19,25],content:[24,31],context:[8,18],continu:40,convers:39,convert:[1,2,19],coordin:14,copi:40,core:[1,12,40],correspond:[24,25,30,42],cost:22,cov:[35,40],coverag:[35,40],creat:[13,14,17,18,20,22,24,25,34,40,42],create_ard:[20,22],create_ard_collect:20,create_submiss:18,creation:[41,42],cred:34,credenti:[14,24,25,39,42],credentials_fil:[14,25,34,42],creds_fil:34,crs:[14,24,25,42],ctx:8,cube:6,current:29,custom:13,d_end:21,d_start:21,dask:[39,40],data:[6,8,10,14,18,19,22,24,25,29,34,42],dataarrai:19,dataset:19,date:29,date_end:[16,18,22,29],date_rang:29,date_start:[16,18,22,29],datetim:[22,29],deal:[21,22],dec:16,decod:24,defin:34,definit:[13,14],delet:[24,25,29],delete_blob:24,describ:[14,29],descript:14,design:39,dest:[14,24,25,29,42],destin:[14,24,25,29,42],detail:35,develop:39,dict:[8,13,16,18,19,20,21,22,24,25,29,42],dictionari:[21,29],difficult:40,dimension:39,directli:40,directori:[19,24,25,29,34,40,42],disabl:[25,34],discoveri:[25,34,42],disk:[19,30],distribut:[39,40],doc:[24,34],docstr:35,doe:25,don:[24,25],download:[10,24,25,29,34,39,40],download_blob:24,download_fil:25,download_file_id:25,download_track:29,downoad:29,draft:14,drive:25,dump:[24,25],each:[19,21,29],earth:[18,24,25,29,42],earthengin:[21,40],easi:34,easiest:[34,40],ecosystem:39,edit:40,either:[13,14,24,25,29,34,40,42],els:34,empti:[17,25],emptycollectionerror:17,enabl:[34,40],encod:[14,19,24,25],encoding_kwd:19,end:[22,29],engin:[18,24,25,29,42],ensur:42,envirn:[24,34],environ:40,error:8,etc:29,evalu:21,exampl:35,except:[1,8,31],execut:29,exist:[24,25,29,30],explicit:14,explicitli:34,export_image_kwd:[14,18,24,25,29,42],extens:35,fail_if_miss:8,fake:24,fals:[18,22,24,25,29],faq:37,favor:[25,34],fetch:8,fetch_config:8,fetch_param:8,file:[4,13,14,15,19,24,25,29,30,34,35,40,42],file_id:25,filedimens:14,fileexistserror:25,filenam:[13,14,19,24,25,29,30,34,42],fill:15,filter:[14,18,22,24,29],filter_collection_til:21,filter_collection_tim:21,find_credenti:25,find_preard:19,first:[24,25,30],fit:42,fix:38,fixtur:[35,40],flag:40,folder:[24,25,42],follow:[34,35,38,40],format:19,frequenc:16,frequent:39,from:[8,13,14,17,19,21,22,24,25,29,34,39,42],from_credenti:[24,25,42],from_templ:14,from_yaml:14,full:35,futur:[25,34,42],gcs:[1,14,23,29,34,42],gcsstore:[14,24,29,42],gdrive:[1,14,23,29,34,42],gdrivestor:[14,25,29,42],gee:[11,13,20,21,22,24,25,29,34,39,41,42],geeard:[16,29],geeard_track:[16,29],geeardtrack:[13,14,29],gener:[18,29,35],geospati:39,geotiff:19,get:[14,18,25,34,39],get_appproperti:25,get_collection_d:21,get_collection_uniq_d:21,get_credenti:[25,34],get_default_schema:15,get_ee_task:29,get_fil:30,get_gcs_stor:14,get_gdrive_stor:14,get_order_metadata:18,get_program_metadata:18,get_submission_info:29,get_task_metadata:18,get_tile_grid:14,get_track:14,get_tracking_metadata:18,getinfo:22,gis:[13,14,22,29],git:40,github:[38,40],give:34,given:25,glob:24,going:34,good:30,googl:[24,25,39],google_application_credenti:[24,34],googleapicli:[25,34,42],got:34,grid:[13,14,22,29],grid_filenam:[13,14],grid_nam:[13,14],group:7,gsutil:24,guid:[34,35,39],handl:[8,14],has:[34,39],have:[40,42],help:39,helper:[24,25],hint:[24,25,42],horizont:[16,29],how:35,howsubdirectorieswork:24,http:[14,24,34],httplib2:40,identifi:29,imag:[16,17,18,19,21,22,24,25,29,42],image_metadata:18,imagecollect:21,imageri:[19,29,42],imgcol:21,importorskip:26,includ:[14,25,34,40],index:0,info:[18,25,29],inform:[18,19,29,38,42],initi:13,input:[19,29,34],insid:[19,24,34],instal:39,instead:[24,25],instruct:34,integ:14,integr:40,interact:[5,34],interfac:34,interpet:29,ipython:34,isn:8,issu:14,item:[14,21,29],its:[8,25,34],jan:16,join:19,json:[14,19,24,25,29,34,42],keepachangelog:38,kei:[21,25,29],keyword:[13,14,24,25,34,42],know:34,known:29,kwd:[8,13],landsat:[1,20,39],last:34,later:40,lazi:[29,35,40],lc08:[20,22],le07:[20,22],learn:35,left:14,librari:[24,34,39,40],like:42,limit:14,line:[34,35],list:[19,21,24,25,29,42],list_blob:24,list_dir:[24,25],list_object:25,list_track:29,load:[14,24,25,34,42],load_credenti:25,load_grid:13,loadabl:13,local:24,locat:[19,25,34,40,42],log:39,look:29,loose_vers:26,lt05:[20,22],mai:40,main:[1,2],make:[24,25,29,34,35,40],map:[20,29],match:[19,29],maxitem:14,mean:40,measur:35,memori:19,metadata:[18,19,21,22,24,25,29,42],metadata_pattern:19,might:[24,34,35],minitem:14,minvers:26,miss:8,mkdir:[24,25],mkdir_p:[24,25],modifi:[15,30],modul:[0,31,34,35],more:[14,29,34],most:34,move:34,n_imag:29,n_step:29,name:[8,13,14,16,18,19,22,24,25,26,29,34,42],name_templ:[14,18,29],nameerror:34,napoleon:35,narrow:25,ndarrai:19,necessari:13,need:[25,34,40],netcdf4:[19,39],netcdf:19,no_brows:[25,34],nodata:22,nodatavalu:22,non:24,none:[8,13,14,15,18,19,22,24,25,26,29,30,34,42],notabl:38,note:[24,34,39],now:40,number:[14,19,22,29,38],numpi:[35,40],numpydoc:40,oauth2:[14,25,34],oauth:34,oauthlib:40,obj:[15,21],object:[13,14,18,21,24,25,29,42],object_metadata:21,observ:[19,22],off:29,onc:40,one:[22,29,35,40],oneof:14,onli:30,onto:[24,25,42],open:[5,16,19,25,34],option:[1,2,13,19,22,24,25,29,30,34,42],order:[1,11,29,31,34,42],order_info:18,org:14,other:[14,29,34],otherwis:[8,13,24,25,29,40,42],our:[34,35,40],output:35,over:22,overview:39,overwrit:[24,25,29,42],packag:[31,34,35,40],page:0,pair:[19,29],panda:[29,40],parallel:39,paramet:[8,13,14,18,19,21,22,24,25,29,30,34,42],parent:[8,24,25,42],parent_id:25,pars:[1,12,14,24,25,35,42],part:[24,42],pass:[13,14,24,25,42],past:29,path:[13,14,16,19,24,25,29,30,34,42],pathlib:[13,24,25,29,42],pattern:[24,25,29,42],patternproperti:14,per:[21,22],perform:22,period:[22,29],period_end:29,period_freq:29,period_start:29,piec:[24,25,42],pile:40,pip:40,platform:[24,34],plugin:[35,40],point:34,possibl:39,pre:[6,11,16,18,19,24,25,29,39,42],preard:[1,31],preard_chunk:16,preard_freq:16,preard_nam:16,preard_prefix:16,preard_to_ard:19,preard_track:16,preard_tracking_prefix:16,prefix:[16,18,24,25,42],prefix_templ:[14,18,29],preprocess:39,previous:29,primarili:39,privat:[25,34],probabl:34,process:[18,19,29,35,39,42],process_preard:19,program:[18,34],progress:29,project:[14,24,34,42],prompt:[25,34],properti:[14,18,29],provid:[14,25,29,34,42],pure:40,put:[25,35],py37:40,pypi:40,pytest:[35,40],python:[5,34,39,40],pyyaml:40,queri:25,query_appproperti:25,question:39,quickli:39,rais:[8,14,17,19,25],rang:29,rasterio:[39,40],read:[19,24,25,29,30,34,42],read_json:[24,25],read_metadata:[19,24,25,42],read_preard:19,readi:[40,42],realli:24,recent:34,recommend:40,recurs:[24,25],ref:14,refer:[14,24,34,39],reflect:40,refresh:29,registr:42,relat:40,releas:38,reli:35,rememb:34,remov:[24,25,38,42],renam:34,repo:40,report:[29,35],repositori:40,representatin:30,requir:[14,22,30],res:14,resourc:[25,34,42],retriev:[21,24,25,42],retrieve_imag:[24,25,42],retrieve_metadata:[24,25,42],reupload:29,root:25,row:29,run:[22,29,35,40],runner:35,runtimeerror:17,same:[35,42],satellit:39,save:[24,25,34,39,42],save_credenti:25,scale:[24,25,42],schema:[14,15],scikit:35,search:[0,24,25,29,42],secret:[14,25],section:13,see:[24,25,35,38],self:[14,18,24,25,29,42],sensor:[1,31],sequenc:[19,21,22,24,25,29,30,42],server:22,servic:[14,24,25,34,42],set:[17,24,30,34],set_file_urw:30,setting_up_authent:[24,34],setup:34,shardsiz:14,share:34,should:[13,29,35,40],shown:35,singl:[18,19],sit:40,size:14,some:[19,21,29],someth:34,sourc:[8,13,14,15,17,18,19,21,22,24,25,26,27,29,30,34,35,42],specif:[20,25,29],specifi:[13,19,29],speed:22,sphinx:[35,40],sphinx_rtd_them:40,sphinxcontrib:40,split:19,ssh:40,start:[18,22,29,39],statist:35,statu:[1,2,18,29],stem:[13,14,22,29],step:[34,40,41],still:34,storag:[1,2,24,39],store:[1,13,14,18,29,31,34,42],store_imag:[24,25,42],store_metadata:[24,25,42],str:[13,14,16,18,19,21,22,24,25,29,30,34,42],string:[14,24,25,30,34],style:[35,38],style_debug:8,style_error:8,style_info:8,style_warn:8,subdataset:19,submiss:[20,22,29,39],submission_info:18,submit:[1,2,18,29],submit_preard_task:18,submodul:31,subpackag:31,subset:29,summari:35,sure:34,system:14,t1_sr:[20,22],take:29,taken:29,task:[9,16,18,24,25,29,39,42],tell:40,templat:[14,16],term:35,termin:[5,25,34,35],test:[1,31],test_cedar:[1,26],test_packag:27,test_track:[1,26],thei:30,them:34,thi:[14,18,24,25,29,34,35,38,40,42],through:42,throughout:42,ties:34,tile:[13,14,16,18,21,22,29],tile_geom:21,tile_grid:[13,14,29],tile_indic:29,tilegrid:[13,14,22,29],time:19,timestamp:42,titl:14,to_netcdf:19,to_yaml:14,tocloudstorag:[14,24,25,42],todai:[16,29],todriv:42,togeth:19,token:[25,34],tool:[4,11,20,39,40],toolz:40,top:40,traceback:34,track:[1,16,18,28,31,42],tracker:[14,29],tracking_info:29,tracking_nam:[18,29],tracking_period:[16,29],tracking_prefix:[18,29],tracking_templ:[14,29],transform:30,trash:25,travi:35,tupl:29,type:[8,13,14,16,18,19,20,21,22,24,25,29,30,34,42],typeerror:34,typic:[21,24,34],unexpect:34,unit:35,updat:[24,25,29,35],update_tracking_info:29,upload:[24,25,42],upload_json:[24,25],upper:14,url:38,use:[13,14,16,19,24,25,29,34,35,40,42],used:[29,35],user:[14,25,30,39,42],using:[13,24,25,34,35,40,42],utf:[24,25],util:[1,24,25,26,31],valid:[14,15,22],validate_with_default:15,validationerror:14,valu:[14,16,29],valueerror:[19,25],variabl:[24,34],version:[18,38],vertic:[16,29],vstring:26,wai:40,wait:22,want:34,web:[25,34],whatev:34,when:[16,17,19,25,34,35,40],which:[34,35],within:[22,24,25,39,42],wkt:14,work:[4,34,39],would:40,wrap:29,write:[14,30],written:[14,19,24,25],xarr:19,xarrai:[19,35,39,40],yaml:14,year:16,yet:[37,40],yield:[24,25,29,42],yml:40,you:[24,34,40],your:[24,34],zlib:14},titles:["API Reference","cedar package","cedar.cli package","cedar.cli.auth module","cedar.cli.config module","cedar.cli.console module","cedar.cli.convert module","cedar.cli.main module","cedar.cli.options module","cedar.cli.status module","cedar.cli.storage module","cedar.cli.submit module","cedar.config package","cedar.config.build module","cedar.config.core module","cedar.config.parse module","cedar.defaults module","cedar.exceptions module","cedar.ordering module","cedar.preard module","cedar.sensors package","cedar.sensors.common module","cedar.sensors.landsat module","cedar.stores package","cedar.stores.gcs module","cedar.stores.gdrive module","cedar.tests package","cedar.tests.test_cedar module","cedar.tests.test_tracking module","cedar.tracking module","cedar.utils module","cedar","Configuration","Pre-ARD to ARD Conversion","Credentials","Developer Notes","Download","Frequently Asked Questions","Change Log","<code class=\"docutils literal notranslate\"><span class=\"pre\">cedar</span></code> - Create Earth engine Data cubes of Analytical Readiness","Installation","Overview","Storage","Task Submissions"],titleterms:{"default":16,access:34,analyt:39,api:[0,34,35],ard:33,ask:37,auth:3,build:13,cedar:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,39],chang:38,cli:[2,3,4,5,6,7,8,9,10,11],cloud:[34,42],command:40,common:21,config:[4,12,13,14,15],configur:32,consol:5,content:[1,2,12,20,23,26],continu:35,convers:33,convert:6,core:14,creat:39,credenti:34,cube:39,data:39,depend:40,develop:[34,35],doc:35,document:[35,40],download:36,drive:[34,42],earth:[34,39,40],engin:[34,39,40],except:17,frequent:37,from:40,gcs:24,gdrive:25,gee:40,googl:[34,40,42],html:35,instal:40,instruct:40,integr:35,interfac:40,landsat:22,line:40,log:38,main:7,modul:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],note:35,option:[8,40],order:18,overview:41,packag:[1,2,12,20,23,26],pars:15,pre:33,preard:19,question:37,readi:39,refer:0,releas:40,requir:40,sensor:[20,21,22],sourc:40,stabl:40,statu:9,storag:[10,34,42],store:[23,24,25],submiss:43,submit:11,submodul:[1,2,12,20,23,26],subpackag:1,task:43,test:[26,27,28,35,40],test_cedar:27,test_track:28,track:29,user:34,util:30}})