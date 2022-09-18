## markdown  table 内容 格式化

工具：https://github.com/littleboyfury/reformat-markdown-table

## allocation failure scavenge might not succeed
```
<--- Last few GCs --->

[21988:000002143F4E15A0]   234720 ms: Mark-sweep 2015.4 (2078.9) -> 2005.6 (2082.4) MB, 528.0 / 0.1 ms  (average mu = 0.161, current mu = 0.087) allocation failure scavenge might not succeed
[21988:000002143F4E15A0]   235716 ms: Mark-sweep 2019.0 (2082.4) -> 2009.3 (2085.1) MB, 942.6 / 0.1 ms  (average mu = 0.095, current mu = 0.054) allocation failure scavenge might not succeed


<--- JS stacktrace --->

==== JS stack trace =========================================

    0: ExitFrame [pc: 00007FF72D0A2A5D]
    1: StubFrame [pc: 00007FF72D0F5082]
Security context: 0x00fb276c08a1 <JSObject>
    2: extractPropsFromVNodeData(aka extractPropsFromVNodeData) [00000217B4C983F9] [F:\blog\demo\note\node_modules\vue\dist\vue.runtime.common.dev.js:~1771] [pc=000001AC25376109](this=0x0396f2b804a9 <undefined>,0x01f8c73d8fd9 <Object map = 0000005B9BA3BE91>,0x02f741d25f01 <JSFunction VueComponent (sfi = 0000018FA350D...

FATAL ERROR: Ineffective mark-compacts near heap limit Allocation failed - JavaScript heap out of memory

Writing Node.js report to file: report.20220918.162949.21988.0.001.json
Node.js report completed
 1: 00007FF72C4D076F napi_wrap+124431
 2: 00007FF72C4724B6 public: bool __cdecl v8::base::CPU::has_sse(void)const __ptr64+34502
 3: 00007FF72C473176 public: bool __cdecl v8::base::CPU::has_sse(void)const __ptr64+37766
 4: 00007FF72CC76D3E private: void __cdecl v8::Isolate::ReportExternalAllocationLimitReached(void) __ptr64+94
 5: 00007FF72CC5ED81 public: class v8::SharedArrayBuffer::Contents __cdecl v8::SharedArrayBuffer::Externalize(void) __ptr64+833
 6: 00007FF72CB2C64C public: static void __cdecl v8::internal::Heap::EphemeronKeyWriteBarrierFromCode(unsigned __int64,unsigned __int64,class v8::internal::Isolate * __ptr64)+1436
 7: 00007FF72CB379F0 public: void __cdecl v8::internal::Heap::ProtectUnprotectedMemoryChunks(void) __ptr64+1312
 8: 00007FF72CB34524 public: static bool __cdecl v8::internal::Heap::PageFlagsAreConsistent(class v8::internal::HeapObject)+3204
 9: 00007FF72CB29DB3 public: bool __cdecl v8::internal::Heap::CollectGarbage(enum v8::internal::AllocationSpace,enum v8::internal::GarbageCollectionReason,enum v8::GCCallbackFlags) __ptr64+1283
10: 00007FF72CB28584 public: void __cdecl v8::internal::Heap::AddRetainedMap(class v8::internal::Handle<class v8::internal::Map>) __ptr64+2356
11: 00007FF72CB49855 public: class v8::internal::Handle<class v8::internal::HeapObject> __cdecl v8::internal::Factory::NewFillerObject(int,bool,enum v8::internal::AllocationType) __ptr64+53
12: 00007FF72C8B6029 ??4iterator@JumpTableTargetOffsets@interpreter@internal@v8@@QEAAAEAV01234@$$QEAV01234@@Z+4057
13: 00007FF72D0A2A5D public: virtual bool __cdecl v8::internal::SetupIsolateDelegate::SetupHeap(class v8::internal::Heap * __ptr64) __ptr64+567949
14: 00007FF72D0F5082 public: virtual bool __cdecl v8::internal::SetupIsolateDelegate::SetupHeap(class v8::internal::Heap * __ptr64) __ptr64+905394
15: 000001AC25376109
```
原因是：
md文件转html文件时，很多html标签，js写法，``里包裹的脚本，在转换过程中，变成可执行脚本导致js报错
解决：
```javascirpt
[脚本]
```
包裹脚本

